import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { SuperCategory } from './super-category.model';
import { CategoryService } from '../category.service';
import { Edit } from '../super-category/edit.model'
import { Delete } from '../super-category/delete-model'

@Component({
  selector: 'app-super-category',
  templateUrl: './super-category.component.html',
  styleUrls: ['./super-category.component.css']
})
export class SuperCategoryComponent implements OnInit {

  superCategories: SuperCategory[] = [];

  superCategoryForm: FormGroup;
  newModel: Edit;
  userModel: SuperCategory;
  deleteModel: Delete;
  showDetails: boolean = true;
  showEdit: boolean;


  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoryService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
    this.category()

  }

  createForm() {
    this.superCategoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      categoryDescription: ['', Validators.required],
      uName: [], //code added
      uDesc: [],
      _id: []

    });
  }



  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

  add(superCategoryForm: FormGroup) {
    this.showDetails = true;
    this.userModel = new SuperCategory(

      superCategoryForm.controls.categoryName.value,
      superCategoryForm.controls.categoryDescription.value
    );

    superCategoryForm.reset()
    this.categoryService.addCat(this.userModel).subscribe(data => {
      var res = JSON.parse(data._body)
      this.superCategories.push(res);

      console.log(res)
      console.log(this.superCategories);

    }, error => {
      console.log(error);
    });
  }



  edit(superCategoryForm: FormGroup, superCatId: any, superCatName: any, superCatDesc: any) {
    this.showEdit = !this.showEdit;
    console.log(superCatId.value);
    this.showDetails = true;
    this.newModel = new Edit(
      superCatId.value,
      superCatName.value,
      superCatDesc.value
    );

    
    superCategoryForm.reset()

    this.categoryService.editCategory(this.newModel).subscribe(data => {
      var res = JSON.parse(data._body)
      this.superCategories.push(res);
      console.log(res)
      console.log(this.superCategories);

    }, error => {
      console.log(error);
    });

  }




  delete(superCategoryForm: FormGroup, superCatId: any) {
    this.showEdit = !this.showEdit;

    this.showDetails = true;
    this.deleteModel = new Delete(
      superCatId.value,
      

    );
    superCategoryForm.reset()

    this.categoryService.deleteCategory(this.deleteModel).subscribe(data => {

    }, error => {
      console.log(error);
    });

  }




 category() {
    
    this.categoryService.showCategory().subscribe(name => {

      this.superCategories=name;

      console.log(name)
     
    }, error => {
      console.log(error);
    });
  } 

}




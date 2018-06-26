import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { CategoryService } from '../category.service';
import { MainCategory } from './main-category.model'

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {

  mainCategories: MainCategory[] = [];
  showEdit: boolean;
  mainCategoryForm: FormGroup;
  mainModel: MainCategory;
  showDetails: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoryService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
  }

  createForm() {
    this.mainCategoryForm = this.fb.group({
      _id: ['', Validators.required],
      mainCategoryName: ['', Validators.required],
      mainCategoryDescription: ['', Validators.required]

    });
  }

  save(mainCategoryForm: FormGroup) {
    this.showDetails = true;


    this.mainModel = new MainCategory(
      mainCategoryForm.controls._id.value,
      mainCategoryForm.controls.mainCategoryName.value,
      mainCategoryForm.controls.mainCategoryDescription.value
    );

    mainCategoryForm.reset()

    this.categoryService.addMainCategory(this.mainModel).subscribe(data => {
      var res = JSON.parse(data._body)
      this.mainCategories.push(res);

      console.log(res)
      console.log(this.mainCategories);

    }, error => {
      console.log(error);
    });

  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

}

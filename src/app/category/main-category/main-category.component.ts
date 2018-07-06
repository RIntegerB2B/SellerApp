import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { CategoryService } from '../category.service';
import { MainCategory } from './main-category.model';
import {SuperCategoryName} from './superCategoryName.model';
import{MainCategoryDetail} from './main-categoryDetail.model'

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
  showDetails: boolean = true;
  Categoryname:SuperCategoryName[]=[];
  mainCategoryDetail:MainCategoryDetail[]=[]

  headerCatSelectedData
  headCatSelected

  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoryService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
    this.superCategory();
    this.mainCategory();
  }

  createForm() {
    this.mainCategoryForm = this.fb.group({
     
      mainCategoryName: ['', Validators.required],
      mainCategoryDescription: ['', Validators.required],
      ID:['']

    });
  }

  save(mainCategoryForm: FormGroup,superCat:any) {
    this.showDetails = true;
    this.mainModel = new MainCategory(
      superCat,
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

  superCategory() {
    this.categoryService.findDetail().subscribe(name => {
      this.Categoryname=name;
      console.log(name)
    }, error => {
      console.log(error);
    });
  }


  onHeaderCategoryChange(headCategory) {
    console.log(headCategory)
    this.headerCatSelectedData=  headCategory.categoryName;
    console.log(this.headerCatSelectedData)
    this.headCatSelected=headCategory;
  }


  mainCategory() {
    this.categoryService.showMainCategory().subscribe(data => {
      this.mainCategoryDetail=data;
      console.log(data)
    }, error => {
      console.log(error);
    });
  }


}

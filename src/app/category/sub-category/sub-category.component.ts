import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { CategoryService } from '../category.service';
import {SuperID} from './sup-cat-id.model';
import {SuperCatDetail} from './sup-cat-detail.model';
import {MainCatDetail} from './main-cat.model'


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategoryForm:FormGroup
showMaincat:boolean
headCatSelected
headerCatSelectedData
superId:SuperID
superCategoryDetail:SuperCatDetail[]=[]
mainCat:MainCatDetail[]=[]

  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoryService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
    this.superCategory();
  }
  createForm() {
    this.subCategoryForm = this.fb.group({
     
      
      ID:[''],
      ID1:[''],
      subCategoryName:['', Validators.required],
      subCategoryDescription:['', Validators.required]

    });
  
  }
  setNewUser(id) {
    console.log(id);
  this.headerCatSelectedData=id;
  this.superId=new SuperID
  (this.headerCatSelectedData
  )
  this.categoryService.showMainCategoryOnSub(this.superId).subscribe(data => {
  
    this.mainCat=data;
   console.log(this.mainCat) 
   console.log(data)
 }, error => {
   console.log(error);
 });
 
}

/*    getCategory(id){
    this.showMaincat=true
  this.headCatSelected=id;
  this.superId=new SuperID(
  this.headCatSelected
  )
  
  this.categoryService.showMainCategoryOnSub(this.superId).subscribe(data => {
  
     this.mainCat=data;
    console.log(this.mainCat) 
    console.log(data)
  }, error => {
    console.log(error);
  });
  
  } */ 


  superCategory() {
    this.categoryService.showSuperCategoryOnSub().subscribe(name => {
      this.superCategoryDetail=name;
      console.log(name)
    }, error => {
      console.log(error);
    });
  } 
  
}

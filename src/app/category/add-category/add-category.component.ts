import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import {CategoryService} from '../../category/category.service';
import {SuperCatID} from './sup-cat-id.model';
import{SuperCatName} from './super-cat-name.model'
import{CategoryDetail} from './cat-detail.model';
import {MainCatData} from './main-cat-data.model'
import{CategoryEdit} from './cat-edit.model';
import {MainCatDelete} from './main-cat-del.model';
import {CategoryDelete} from './cat-del.model'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  editCategoryForm: FormGroup;
  showMaincat:boolean;
  headCatSelected
  id:SuperCatID;
  catData:CategoryDetail[]=[]
  CategoryName:SuperCatName[]=[]
  showEdit:boolean
  mainCategoryModel:MainCatData
  editModel:CategoryEdit;
  deleteModel:CategoryDelete;
  mainCatDelete:MainCatDelete

  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoryService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.createForm();
    this.superCategory()
  }

  createForm() {
    this.editCategoryForm = this.fb.group({
      supID:[],
      _id:[],
      name:[],
      desc:[]
    });
  }
  


  superCategory() {
    this.categoryService.findDetail().subscribe(name => {
      this.CategoryName=name;
      console.log(name)
    }, error => {
      console.log(error);
    });
  }



 getCategory(id){
  this.showMaincat=true
this.headCatSelected=id;
 this.id=new SuperCatID(
this.headCatSelected
)

this.categoryService.showMainCategoryData(this.id).subscribe(data => {
  this.catData=data;
  console.log(this.catData)
  
}, error => {
  console.log(error);
}); 

}


toggleEdit() {
  this.showEdit = !this.showEdit;

}

edit(editCategoryForm: FormGroup, supId: any,mainCatId:any, mainCatName: any, mainCatDesc: any) {
  this.showEdit = !this.showEdit;


  this.mainCategoryModel=new MainCatData(mainCatId.value,mainCatName.value,mainCatDesc.value);
  
  this.editModel = new CategoryEdit(
    supId.value,
   this.mainCategoryModel
  );


  this.categoryService.editMainCategory(this.editModel).subscribe(data => {
   this.catData=data
    console.log(data)
    
  }, error => {
    console.log(error);
  }); 
}
 

delete(editCategoryForm: FormGroup, supId: any,mainCatId:any){
  this.showEdit = !this.showEdit;



  this.mainCatDelete=new MainCatDelete(mainCatId.value);
  this.deleteModel=new CategoryDelete (supId.value,this.mainCatDelete)

  this.categoryService.deleteMainCategory(this.deleteModel).subscribe(data => {
    
     
   }, error => {
     console.log(error);
   }); 

}



}



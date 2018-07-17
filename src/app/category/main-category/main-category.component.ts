import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { CategoryService } from '../category.service';
import { MainCategory } from './main-category.model';
import {SuperCategoryName} from './superCategoryName.model';
import {MainCategoryDetail} from './main-categoryDetail.model';
import {MainCat} from '../main-category/main-cat.model';
import {SuperCategoryID} from './super-cat-detail.model';


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
  Categoryname:SuperCategoryName[]=[];
  mainCategoryDetail:MainCategoryDetail[]=[]
  id:SuperCategoryID
  headerCatSelectedData
  headCatSelected
  showMaincat:boolean 
  mainCat:MainCat[]=[]

  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoryService,
    private navHeaderService: NavHeaderService) {


     }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
    /* this.getCategory(this.id); */
    this.superCategory();
   
  }

  createForm() {
    this.mainCategoryForm = this.fb.group({
      mainCategoryName: ['', Validators.required],
      mainCategoryDescription: ['', Validators.required],
      ID:[''],
      supID:[]
    });
  }



  save(mainCategoryForm: FormGroup,superCat:any) {
    this.showDetails = true;
    this.mainModel = new MainCategory(
      superCat,
      mainCategoryForm.controls.mainCategoryName.value,
      mainCategoryForm.controls.mainCategoryDescription.value
    );
console.log(this.mainModel)
    mainCategoryForm.reset()
    this.categoryService.addMainCategory(this.mainModel).subscribe(data => {
      console.log(data)
     
      this.mainCategories=data
    
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


  setNewUser(id) {
    console.log(id);
  this.headerCatSelectedData=id;
 
}

getCategory(id){
  this.showMaincat=true
this.headCatSelected=id;
this.id=new SuperCategoryID(
this.headCatSelected
)

this.categoryService.showMainCategoryDetails(this.id).subscribe(data => {

  this.mainCat=data;
  console.log(this.mainCat)
  console.log(data)
}, error => {
  console.log(error);
});

}





}

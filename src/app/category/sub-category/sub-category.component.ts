import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { CategoryService } from '../category.service';
import { SuperID } from './sup-cat-id.model';
import { SuperCatDetail } from './sup-cat-detail.model';
import { MainCatDetail } from './main-cat.model'
import { SuperCatIdAndMainCat } from './super-cat-model';
import { SubCategory } from './sub-cat-detail.model';
import { MainCatIdAndSub } from './main-cat-id.model';
import { MainCatView } from './main-cat-view.model';
import { SuperCatView } from './super-cat-view.model';
import { MainCategoryData } from './main-cat-data.model'
import { SubCategoryData } from './sub-cat-data.model';
import { SubCatEdit } from './edit.model';
import { SubCatDelete } from './delete.model'

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategoryForm: FormGroup
  showMaincat: boolean
  showDetails: boolean
  headCatSelected
  headerCatSelectedData
  headCatSelected1
  superId: SuperID
  superCategoryDetail: SuperCatDetail[] = []
  mainCat: MainCatDetail[] = []
  superModel: SuperCatIdAndMainCat
  subCategoryModel: SubCategory
  mainCategoryModel: MainCatIdAndSub
  superCategoryIdModel: SuperCatView
  mainCategoryIdModel: MainCatView
  mainCategoryDetail: MainCategoryData[] = []
  subCategoryData: SubCategoryData[] = []
  showEdit
  subCatEdit: SubCatEdit
  showSubData: boolean
  subCatDelete: SubCatDelete

  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoryService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
    this.superCategory();
  }
  createForm() {
    this.subCategoryForm = this.fb.group({


      ID: [''],
      ID1: [''],
      subCategoryName: ['', Validators.required],
      subCategoryDescription: ['', Validators.required],
      supID: [''],
      _id: [''],
      name: [''],

      desc: ['']
    });

  }
  setNewUser(id) {
    console.log(id);
    this.headerCatSelectedData = id;
    this.superId = new SuperID
      (this.headerCatSelectedData
      )
    this.categoryService.showMainCategoryOnSub(this.superId).subscribe(data => {

      this.mainCat = data;
      console.log(this.mainCat)
      console.log(data)
    }, error => {
      console.log(error);
    });

  }

  getCategory(id) {
    this.headCatSelected = id;
    console.log(this.headCatSelected)
  }



  getSubCategory(id, id1) {
    this.showSubData = true
    this.headCatSelected = id;
    console.log(this.headCatSelected)
    this.headCatSelected1 = id1
    console.log(this.headCatSelected1)

    this.mainCategoryIdModel = new MainCatView(this.headCatSelected1)

    this.superCategoryIdModel = new SuperCatView(
      this.headCatSelected,
      this.mainCategoryIdModel
    )

    this.categoryService.showSubCategory(this.superCategoryIdModel).subscribe(data => {
      this.subCategoryData = data
      console.log(this.subCategoryData)

      console.log(data)
    })

  }

  superCategory() {
    this.categoryService.showSuperCategoryOnSub().subscribe(name => {
      this.superCategoryDetail = name;
      console.log(name)
    }, error => {
      console.log(error);
    });
  }

  toggleEdit() {
    this.showEdit = !this.showEdit;

  }

  save(subCategoryForm: FormGroup, superCat: any, mainCategory: any) {
    this.showDetails = true;

    this.subCategoryModel = new SubCategory(
      subCategoryForm.controls.subCategoryName.value,
      subCategoryForm.controls.subCategoryDescription.value
    );

    this.mainCategoryModel = new MainCatIdAndSub(
      mainCategory,
      this.subCategoryModel
    );

    this.superModel = new SuperCatIdAndMainCat(
      superCat,
      this.mainCategoryModel
    )

    subCategoryForm.reset()
    this.categoryService.addSubCategory(this.superModel).subscribe(data => {
      console.log(data)


    }, error => {
      console.log(error);
    });
  }


  edit(subCategoryForm, selectData: any, selectData2: any, subCatId: any, subCatName: any, subCatDesc: any) {
    this.showEdit = false
    this.subCatEdit = new SubCatEdit(
      selectData,
      selectData2,
      subCatId,
      subCatName,
      subCatDesc
    )
    this.categoryService.editSubCategory(this.subCatEdit).subscribe(data => {
      console.log(data)


    }, error => {
      console.log(error);
    });

  }

  delete(subCategoryForm, selectData: any, selectData2: any, subCatId: any) {
    this.showEdit = false

    this.subCatDelete = new SubCatDelete(
      selectData,
      selectData2,
      subCatId
    )

    this.categoryService.deleteSubCategory(this.subCatDelete).subscribe(data => {
     this.subCategoryData = data
      console.log(data)


    }, error => {
      console.log(error);
    });
  }
}

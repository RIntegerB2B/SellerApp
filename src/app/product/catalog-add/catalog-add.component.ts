import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import {ProductService} from '../../product/product.service';
import {CatalogModel} from './catalog.model'

@Component({
  selector: 'app-catalog-add',
  templateUrl: './catalog-add.component.html',
  styleUrls: ['./catalog-add.component.css']
})
export class CatalogAddComponent implements OnInit {
  catalogForm:FormGroup
  catalogModel:CatalogModel

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
  }

  createForm() {
    this.catalogForm = this.fb.group({
      catalogName:['', Validators.required],
      catalogType:['', Validators.required],
      material:['', Validators.required],
      capacity:['', Validators.required],
      catalogDescription:['', Validators.required],
      work:['', Validators.required],
      dispatch:['', Validators.required],
      imageType:['', Validators.required],
      catalogImage:['']

    });
  }


  catalogSave(catalogForm:FormGroup){
    this.catalogModel=new CatalogModel(
      catalogForm.controls.catalogName.value,
      catalogForm.controls.catalogType.value,
      catalogForm.controls.material.value,
      catalogForm.controls.capacity.value,
      catalogForm.controls.catalogDescription.value,
      catalogForm.controls.work.value,
      catalogForm.controls.dispatch.value,
      catalogForm.controls.imageType.value
    )
    this.catalogForm.reset()

  /*  this.productService.catalogCreate(this.catalogModel).subscribe(createdCatalog => {
      console.log(createdCatalog);
    }); */
  }
}

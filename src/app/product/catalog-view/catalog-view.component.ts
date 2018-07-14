import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import {ProductService} from '../../product/product.service';
import {CatalogViewModel} from './catalog-view.model'

@Component({
  selector: 'app-catalog-view',
  templateUrl: './catalog-view.component.html',
  styleUrls: ['./catalog-view.component.css']
})
export class CatalogViewComponent implements OnInit {

  viewCatalogForm:FormGroup
catalogs:CatalogViewModel[]=[]

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.catalog()
  }

  
  catalog() {
    this.productService.showCatalog().subscribe(data => {
      this.catalogs=data;
      console.log(data)
    }, error => {
      console.log(error);
    });
  }
  

}

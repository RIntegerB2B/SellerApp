import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CatalogName} from './catalog-name.model';
import {Catalogs} from './catalog.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
catalogData: CatalogName[] = [];
  Catalogs: Catalogs[] = [];
  headerCatSelectedData;
  viewProductForm: FormGroup;
  id;
  productId;

  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
    this.getCatalog();
  }

  createForm() {
    this.viewProductForm = this.fb.group({
      productId: ['']
    });
  }
  getCatalog() {
    this.productService.showCatalog().subscribe(data => {
      this.catalogData = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  setCatalog(id) {
    console.log(id);
  this.headerCatSelectedData = id;
  this.productService.getProductById(this.headerCatSelectedData).subscribe(data => {
    this.Catalogs = data;
    console.log(this.Catalogs);
  }, error => {
    console.log(error);
  });
}

productDelete(viewProductForm: FormGroup, selectElem: any, productId: any) {


  this.productService.deleteProduct(selectElem.value, productId.value).subscribe(data => {
    this.Catalogs = data;
    console.log(this.Catalogs);
  }, error => {
    console.log(error);
  });
}

productUpdate(viewProductForm: FormGroup, selectElem: any, productId: any) {
  this.id = selectElem.value;
  this.productId = productId.value;
  this.router.navigate(['/Catalog', this.id , 'Product' , this.productId] );
}
}

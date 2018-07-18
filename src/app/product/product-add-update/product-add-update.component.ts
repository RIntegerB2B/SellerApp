import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CatalogDetail} from './catalog.model';
import {Product} from './product.model';

@Component({
  selector: 'app-product-add-update',
  templateUrl: './product-add-update.component.html',
  styleUrls: ['./product-add-update.component.css']
})
export class ProductAddUpdateComponent implements OnInit {

  productForm: FormGroup;
Catalogs: CatalogDetail ;
productModel: Product;
catalogId;
productId;
showUpdate: Boolean;
id;


  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService,
    private activatedRoute: ActivatedRoute) {
      this.catalogId = this.activatedRoute.snapshot.paramMap.get('id') ;
      this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    /*  this.id = this.catalogId; */
      console.log(this.catalogId);
      console.log(this.productId);
     }


  ngOnInit() {
    this.catalog();
    this.navHeaderService.hideMenuTransparent();
this.createForm();
if (this.catalogId) {
  if (this.productId) {
 this.getCatalog(this.catalogId , this.productId);
  }
}
  }
   /*  let cat = this.activatedRoute.paramMap.get('id') ; */


  createForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      sizeDescription: ['', Validators.required],
      productTypeDesc: ['', Validators.required],
      size: ['', Validators.required],
      productDescription: ['', Validators.required],
      cod: ['', Validators.required],
      dispatchDesc: ['', Validators.required],
      watsAppDesc: ['', Validators.required],
      imageType: ['', Validators.required],
      catalogId: ['']
    });

  }
  catalog() {
    this.productService.findCatalog().subscribe(data => {
      this.Catalogs = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  setNewUser(id) {
    console.log(id);
}


productSave(productForm: FormGroup, id: any) {


  this.productModel = new Product(
  id,
    productForm.controls.productName.value,
    productForm.controls.price.value,
    productForm.controls.sizeDescription.value,
    productForm.controls.productTypeDesc.value,
    productForm.controls.size.value,
   productForm.controls.productDescription.value,
    productForm.controls.cod.value,
    productForm.controls.dispatchDesc.value,
    productForm.controls.watsAppDesc.value,
    productForm.controls.imageType.value,
  );
console.log(this.productModel);


  this.productForm.reset();

  this.productService.addProduct(this.productModel).subscribe(data => {
    console.log(data);
  });
}


getCatalog(id, productId) {
  this.showUpdate = true;
  this.productService.getProduct(id, productId).subscribe(data => {
    this.productModel = data;
    this.productForm.setValue({
      catalogId: this.productModel._id,
      productName: this.productModel.productName,
      price: this.productModel.price,
      sizeDescription: this.productModel.sizeDescription,
      productTypeDesc: this.productModel.productTypeDesc,
      size: this.productModel.size,
      productDescription: this.productModel.productDescription,
      cod: this.productModel.cod,
      dispatchDesc: this.productModel.dispatchDesc,
      watsAppDesc: this.productModel.watsAppDesc,
      imageType: this.productModel.imageType
    }
    );
    console.log(data);
  });
}


productUpdate(productForm: FormGroup, selectElem: any, catalogId: any) {
  this.productModel = new Product(
    catalogId,
    productForm.controls.productName.value,
    productForm.controls.price.value,
    productForm.controls.sizeDescription.value,
    productForm.controls.productTypeDesc.value,
    productForm.controls.size.value,
   productForm.controls.productDescription.value,
    productForm.controls.cod.value,
    productForm.controls.dispatchDesc.value,
    productForm.controls.watsAppDesc.value,
    productForm.controls.imageType.value
  );
  this.productForm.reset();
this.productService.updateProduct(selectElem, this.productModel).subscribe(data => {
    console.log(data);
  });
}
}

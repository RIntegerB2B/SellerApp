import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{CatalogDetail} from './catalog.model';
import {Product} from './product.model'

@Component({
  selector: 'app-product-add-update',
  templateUrl: './product-add-update.component.html',
  styleUrls: ['./product-add-update.component.css']
})
export class ProductAddUpdateComponent implements OnInit {

  productForm:FormGroup
Catalogs:CatalogDetail[]=[];
productModel:Product

  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService,
    private activatedRoute: ActivatedRoute) {
     }


  ngOnInit() {
    this.catalog()
    this.navHeaderService.hideMenuTransparent();
this.createForm();
  }

  createForm(){
    this.productForm = this.fb.group({
      productName:['', Validators.required],
      price:['', Validators.required],
      sizeDescription:['', Validators.required],
      productTypeDesc:['', Validators.required],
      size:['', Validators.required],
      productDescription:['', Validators.required],
      cod:['', Validators.required],
      dispatchDesc:['', Validators.required],
      watsAppDesc:['', Validators.required],
      imageType:['', Validators.required]

    });

  }
  catalog() {
    this.productService.findCatalog().subscribe(data => {
      this.Catalogs=data;
      console.log(data)
    }, error => {
      console.log(error);
    });
  }

  setNewUser(id) {
    console.log(id);
}


productSave(productForm:FormGroup,id:any){


  this.productModel=new Product(
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
    productForm.controls.imageType.value
  )
console.log(this.productModel)


  this.productForm.reset()

  this.productService.addProduct(this.productModel).subscribe(data => {
    console.log(data);
  });
}
}

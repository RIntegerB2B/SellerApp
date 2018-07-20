import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogDetail } from './catalog.model';
import { Product } from './product.model';
import { ProductImageData } from './productImageData.model';

@Component({
  selector: 'app-product-add-update',
  templateUrl: './product-add-update.component.html',
  styleUrls: ['./product-add-update.component.css']
})
export class ProductAddUpdateComponent implements OnInit {

  productForm: FormGroup;
  Catalogs: CatalogDetail;
  productModel: Product;
  catalogId;
  productId;
  showUpdate: Boolean;
  id;

  productDetailModel: Product;
  productImageData: ProductImageData = new ProductImageData();
  fileToUpload: File = null;
  reader: FileReader = new FileReader();
  productImageBlob: Blob;
  productImageBytes: Uint8Array;

  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService,
    private activatedRoute: ActivatedRoute) {
    this.catalogId = this.activatedRoute.snapshot.paramMap.get('id');
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
        this.getCatalog(this.catalogId, this.productId);
      }
    }
  }


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

  handleFileInput(files: FileList, loadedImage) {
    this.fileToUpload = files.item(0);
    this.productImageData.productImage = this.fileToUpload = files[0];
    this.reader.readAsArrayBuffer(this.fileToUpload);
    this.reader.onload = () => {
      const fileResult = this.reader.result;
      this.productImageBytes = new Uint8Array(fileResult);
      this.productImageBlob = new Blob([this.productImageBytes.buffer]);
      const reader1 = new FileReader();
      reader1.readAsDataURL(this.productImageBlob);
      reader1.onload = (e: Event & { target: { result: string } }) => {
        loadedImage.src = reader1.result;
      };
    };

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
    this.productModel.productImageName = this.productImageData.productImage.name;

    this.productForm.reset();

    this.productService.addProduct(this.productModel).subscribe(data => {
      console.log(data);
    });
    this.uploadProductImage();
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

    this.productModel.productImageName = this.productImageData.productImage.name;
    this.productService.updateProduct(selectElem, this.productModel).subscribe(data => {
      console.log(data);
    });
    this.uploadProductImage();
  }

  uploadProductImage() {
    this.productService.uploadProductImage(this.productImageData).subscribe(data => {
    }, error => {
      console.log(error);
    });
  }
}

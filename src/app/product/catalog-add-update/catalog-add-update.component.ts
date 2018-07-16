import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
/* import { CatalogModel } from './catalog.model'; */
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CatalogData}from '././catalog.model'
import {CatalogUpdateModel} from './catalog-update.model';
import {CatalogDeleteModel} from './catalog-delete.model'

@Component({
  selector: 'app-catalog-add-update',
  templateUrl: './catalog-add-update.component.html',
  styleUrls: ['./catalog-add-update.component.css']
})
export class CatalogAddUpdateComponent implements OnInit {
  /* catalogForm: FormGroup;
  catalogId: string;
  fileToUpload: File = null;
  reader: FileReader = new FileReader();
  catalogModel: CatalogModel = new CatalogModel();
  catalogImageBlob: Blob;
  loadedCatalogModel: CatalogModel = new CatalogModel(); */

  catalogs:CatalogData
  updateModel:CatalogUpdateModel
  deleteModel:CatalogDeleteModel
  showEdit:boolean
  editCatalogForm:FormGroup

  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService,
    private activatedRoute: ActivatedRoute) {
      /* this.catalogId = this.activatedRoute.snapshot.paramMap.get('key') */;
    }

  ngOnInit() {
    this.createForm();
    this.navHeaderService.hideMenuTransparent();
    this.catalog()
    /* if (this.catalogId) {
      this.loadCatalog(this.catalogId);
    } */
  }

 /*  loadCatalog(catId: string) {
    // loadedCatalogModel = getCatalog(catId);
    this.catalogForm.setValue({
      catalogName:    this.loadedCatalogModel.catalogName,
      catalogImage: this.loadedCatalogModel.catalogImage
   });
  } */

  createForm() {
    this.editCatalogForm = this.fb.group({
      catalogName: [''],
      catalogType:[''],
      material:[''],
      capacity:[''],
      catalogDescription:[''],
      work:[''],
      dispatch:[''],
      imageType:['']
    });

   
  }

  /* handleFileInput(files: FileList, loadedImage) {
    this.fileToUpload = files.item(0);
    this.fileToUpload = files[0];
    this.reader.readAsArrayBuffer(this.fileToUpload);
    this.reader.onload = () => {
      const fileResult = this.reader.result;
      const bytes = new Uint8Array(fileResult);
      this.catalogImageBlob = new Blob([bytes.buffer]);
      const reader1 = new FileReader();
      reader1.readAsDataURL(this.catalogImageBlob);
      reader1.onload = function () {
        loadedImage.src = reader1.result;
      };

    };
  } */

  catalog() {
    this.productService.showCatalog().subscribe(data => {
      this.catalogs=data;
      console.log(data)
    }, error => {
      console.log(error);
    });
  }
  
  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

  edit(editCatalogForm:FormGroup,catalogID:any,catalogName:any,catalogType:any,material:any,capacity:any,catalogDescription:any,work:any,dispatch:any,imageType:any){
    this.showEdit = !this.showEdit;
    this.updateModel=new CatalogUpdateModel(
      catalogID.value,
      catalogName.value,
      catalogType.value,
      material.value,
      capacity.value,
      catalogDescription.value,
      work.value,
      dispatch.value,
      imageType.value
    )


    this.productService.editCatalog(this.updateModel).subscribe(data => {
      this.catalogs=data
       console.log(this.catalogs);
 
     }, error => {
       console.log(error);
     });
  }


  del(editCatalogForm:FormGroup,catalogID:any){
    this.showEdit = !this.showEdit;
    this.deleteModel=new CatalogDeleteModel(
      catalogID.value
    )

    this.productService.deleteCatalog(this.deleteModel).subscribe(data => {
      this.catalogs=data
       console.log(this.catalogs);
 
     }, error => {
       console.log(error);
     });


  }


}

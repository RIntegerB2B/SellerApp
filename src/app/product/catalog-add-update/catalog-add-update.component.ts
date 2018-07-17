import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
/* import { CatalogModel } from './catalog.model'; */
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CatalogData} from '././catalog.model';
import {CatalogUpdateModel} from './catalog-update.model';



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

  catalogId: string;
  catalogModel: CatalogData;
  loadedCatalogModel: CatalogData;
  updateModel: CatalogUpdateModel;
  showEdit: boolean;
  catalogForm: FormGroup;
  showUpdate: boolean;

  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService,
    private activatedRoute: ActivatedRoute) {
      this.catalogId = this.activatedRoute.snapshot.paramMap.get('id') ;
      console.log(this.catalogId);
    }

  ngOnInit() {
    this.createForm();
    this.navHeaderService.hideMenuTransparent();
    if (this.catalogId) {
      this.getCatalog(this.catalogId);
  }}

  createForm() {
    this.catalogForm = this.fb.group({
      catalogId: [''],
      catalogName: [''],
      catalogType: [''],
      material: [''],
      capacity: [''],
      catalogDescription: [''],
      work: [''],
      dispatch: [''],
      imageType: ['']
    });
  }

  getCatalog(catId) {
    this.showUpdate = true;
      this.productService.getCatalog(this.catalogId).subscribe(data => {
        this.loadedCatalogModel = data;
        console.log(this.loadedCatalogModel);
        this.catalogForm.setValue({
          catalogName: this.loadedCatalogModel.catalogName,
          catalogType: this.loadedCatalogModel.catalogType,
          material : this.loadedCatalogModel.material,
          capacity : this.loadedCatalogModel.capacity,
          catalogDescription: this.loadedCatalogModel.catalogDescription,
          work: this.loadedCatalogModel.work,
          dispatch : this.loadedCatalogModel.dispatch,
          imageType : this.loadedCatalogModel.imageType,
           catalogId : catId
        });
      }, error => {
        console.log(error);
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


  toggleEdit() {
    this.showEdit = !this.showEdit;
  }


  catalogSave(catalogForm: FormGroup) {

    this.catalogModel = new CatalogData(
      catalogForm.controls.catalogName.value,
      catalogForm.controls.catalogType.value,
      catalogForm.controls.material.value,
      catalogForm.controls.capacity.value,
      catalogForm.controls.catalogDescription.value,
      catalogForm.controls.work.value,
      catalogForm.controls.dispatch.value,
      catalogForm.controls.imageType.value
    );
    this.catalogForm.reset();

    this.productService.catalogCreate(this.catalogModel).subscribe(createdCatalog => {
      console.log(createdCatalog);
    });
  }


  edit(editCatalogForm: FormGroup, catalogId: any,
  catalogName: any, catalogType: any, material: any, capacity: any,
  catalogDescription: any, work: any, dispatch: any, imageType: any)  {
    this.updateModel = new CatalogUpdateModel(
      catalogId.value,
      catalogName.value,
      catalogType.value,
      material.value,
      capacity.value,
      catalogDescription.value,
      work.value,
      dispatch.value,
      imageType.value
    );
this.catalogForm.reset();

    this.productService.editCatalog(this.updateModel).subscribe(data => {
     }, error => {
       console.log(error);
     });
    }
}

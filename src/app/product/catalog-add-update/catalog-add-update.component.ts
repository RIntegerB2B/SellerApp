import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { CatalogModel } from './catalog.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalog-add-update',
  templateUrl: './catalog-add-update.component.html',
  styleUrls: ['./catalog-add-update.component.css']
})
export class CatalogAddUpdateComponent implements OnInit {
  catalogForm: FormGroup;
  catalogId: string;
  fileToUpload: File = null;
  reader: FileReader = new FileReader();
  catalogModel: CatalogModel = new CatalogModel();
  catalogImageBlob: Blob;
  loadedCatalogModel: CatalogModel = new CatalogModel();
  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService,
    private activatedRoute: ActivatedRoute) {
      this.catalogId = this.activatedRoute.snapshot.paramMap.get('key');
    }

  ngOnInit() {
    this.createForm();
    this.navHeaderService.hideMenuTransparent();
    if (this.catalogId) {
      this.loadCatalog(this.catalogId);
    }
  }

  loadCatalog(catId: string) {
    // loadedCatalogModel = getCatalog(catId);
    this.catalogForm.setValue({
      catalogName:    this.loadedCatalogModel.catalogName,
      catalogImage: this.loadedCatalogModel.catalogImage
   });
  }

  createForm() {
    this.catalogForm = this.fb.group({
      catalogName: ['', Validators.required],
      catalogImage: ['']
    });
  }

  handleFileInput(files: FileList, loadedImage) {
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
  }

  catalogSave(catForm: FormGroup) {
    this.catalogModel.catalogName =  catForm.controls.catalogName.value;
    this.catalogModel.catalogImage = this.catalogImageBlob;
    this.productService.catalogCreate(this.catalogModel).subscribe(createdCatalog => {
      console.log(createdCatalog);
    });
  }

}

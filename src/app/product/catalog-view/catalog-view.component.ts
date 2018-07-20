import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ProductService } from '../../product/product.service';
import { CatalogViewModel } from './catalog-view.model';
import { CatalogDelete } from '../catalog-view/catalog-delete.model';
import {CatalogImage} from './catalogImageData.model';

@Component({
  selector: 'app-catalog-view',
  templateUrl: './catalog-view.component.html',
  styleUrls: ['./catalog-view.component.css']
})
export class CatalogViewComponent implements OnInit {

  viewCatalogForm: FormGroup;
  catalogs: CatalogViewModel ;
  deleteModel: CatalogDelete;
  catalogId: string;
  catalogValue;
  id;
  catlogImage: CatalogImage = new CatalogImage();
  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.catalog();
    this.createForm();
  }


  createForm() {
    this.viewCatalogForm = this.fb.group({
      catalogId: ['']
    });
  }

  catalog() {
    this.productService.showCatalog().subscribe(data => {
      this.catalogs = data;
     /*  this.catalogs.catalogImageName = this.catlogImage.catalogImage.name; */
      console.log( data);
    }, error => {
      console.log(error);
    });
  }
  update(viewCatalogForm: FormGroup, catalogID: any) {
    this.id = catalogID.value;
    /* console.log(this.id); */
    this.router.navigate(['/Catalog', this.id]);
  }



  catalogDelete(editCatalogForm: FormGroup, catalogID: any) {
    this.deleteModel = new CatalogDelete(
      catalogID.value
    );

    this.productService.deleteCatalog(this.deleteModel).subscribe(data => {
      this.catalogs = data;
      console.log(this.catalogs);
    }, error => {
      console.log(error);
    });


  }

}

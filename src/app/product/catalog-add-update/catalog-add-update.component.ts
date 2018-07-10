import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { CatalogModel } from './catalog.model';

@Component({
  selector: 'app-catalog-add-update',
  templateUrl: './catalog-add-update.component.html',
  styleUrls: ['./catalog-add-update.component.css']
})
export class CatalogAddUpdateComponent implements OnInit {

  fileToUpload: File = null;
  reader: FileReader = new FileReader();
  catalogModel: CatalogModel = new CatalogModel();
  catalogImageBlob: Blob;
  constructor(private productService: ProductService, private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
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
      console.log(this.catalogImageBlob);
      reader1.onload = function () {
        loadedImage.src = reader1.result;
      };

    };
  }

  save() {
    this.catalogModel.catalogName = ''; // Get the data from the Template
    this.catalogModel.catalogImage = this.catalogImageBlob;
  }

}

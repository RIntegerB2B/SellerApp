import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-catalog-upload',
  templateUrl: './catalog-upload.component.html',
  styleUrls: ['./catalog-upload.component.css']
})
export class CatalogUploadComponent implements OnInit {
  fileToUpload: File = null;
  constructor(private productService: ProductService) {}

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.productService.uploadCatalog(this.fileToUpload);
}

}

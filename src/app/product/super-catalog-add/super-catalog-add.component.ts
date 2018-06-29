import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';


@Component({
  selector: 'app-super-catalog-add',
  templateUrl: './super-catalog-add.component.html',
  styleUrls: ['./super-catalog-add.component.css']
})
export class SuperCatalogAddComponent implements OnInit {
  fileToUpload: File = null;
  reader: FileReader = new FileReader();
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
      const blob = new Blob([bytes.buffer]);
      const reader1 = new FileReader();
      reader1.readAsDataURL(blob);
      console.log(blob);
      reader1.onload = function () {
        loadedImage.src = reader1.result;
      };

    };
  }

  uploadFileToActivity() {
   
  }



}

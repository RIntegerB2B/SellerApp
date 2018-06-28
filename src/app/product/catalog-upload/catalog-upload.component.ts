import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';

@Component({
  selector: 'app-catalog-upload',
  templateUrl: './catalog-upload.component.html',
  styleUrls: ['./catalog-upload.component.css']
})
export class CatalogUploadComponent implements OnInit {
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
      /*  this.check1 = reader.result;
        console.log( this.check1 );
        this.byteArrayConverted = this.convertDataURIToBinary(this.check1);
        console.log( this.byteArrayConverted );
        this.content = new IContent();
     //   _formData.append("Name",  this.fileToUpload.name);
     //   _formData.append("MyFile",  reader.result);
        var byteArray = new Uint8Array(reader.result); */

      /* this.fileBase64Value = btoa(String.fromCharCode.apply(null, byteArray));
       this.fileStream= "data:" + this.fileToUpload.type + ";base64," + this.fileBase64Value;
       this.fileStreamArray.push(this.fileStream);*/
      let data = this.reader.result;
      var bytes = new Uint8Array(data);
   var blob        = new Blob([bytes.buffer]);

      console.log(data);

      //loadedImage.src = data;

      var reader1 = new FileReader();
      reader1.readAsDataURL(blob);
      console.log(blob);
      reader1.onload = function(e) {
        loadedImage.src = e.target.result;
   };
  
    };
  }

  uploadFileToActivity() {
    this.productService.uploadCatalog(this.fileToUpload);
  }



}

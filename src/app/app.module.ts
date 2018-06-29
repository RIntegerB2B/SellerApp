import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatInputModule} from '@angular/material/input';



import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './shared/nav-header/nav-header.component';
import { Routing } from './app.route';


import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { AccountService } from './account/account.service';
import { NavHeaderService } from './shared/nav-header/nav-header.service';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { PwdChangeRequestComponent } from './account/pwd-change-request/pwd-change-request.component';
import { PwdChangeResetComponent } from './account/pwd-change-reset/pwd-change-reset.component';
import { SuperCategoryComponent } from './category/super-category/super-category.component';
import { MainCategoryComponent } from './category/main-category/main-category.component';
import { SubProdUploadComponent } from './product/sub-prod-upload/sub-prod-upload.component';
import { ProductService } from './product/product.service';
import { SuperCatalogAddComponent } from './product/super-catalog-add/super-catalog-add.component';
import { SuperCatalogViewComponent } from './product/super-catalog-view/super-catalog-view.component';
import { MainCatalogAddComponent } from './product/main-catalog-add/main-catalog-add.component';
import { MainCatalogViewComponent } from './product/main-catalog-view/main-catalog-view.component';
import { SubProductViewComponent } from './product/sub-product-view/sub-product-view.component';
import { SubProductAddComponent } from './product/sub-product-add/sub-product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    WelcomeComponent,
    SignInComponent,
    HomePageComponent,
    AddCategoryComponent,
    PwdChangeRequestComponent,
    PwdChangeResetComponent,
    SuperCategoryComponent,
    MainCategoryComponent,
    SubProdUploadComponent,
    SuperCatalogAddComponent,
    SuperCatalogViewComponent,
    MainCatalogAddComponent,
    MainCatalogViewComponent,
    SubProductViewComponent,
    SubProductAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Routing,
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For Tumblr counts
    RouterModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatInputModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AccountService,
    NavHeaderService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { ProductService } from './product/product.service';
import { CatalogAddUpdateComponent } from './product/catalog-add-update/catalog-add-update.component';
import { ProductAddUpdateComponent } from './product/product-add-update/product-add-update.component';
import { CatalogViewComponent } from './product/catalog-view/catalog-view.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';
import { CatalogAddComponent } from './product/catalog-add/catalog-add.component';
import { BuyerComponent} from './buyer/buyer/buyer.component';
import { BuyerDetailsService } from '../app/buyer/buyer-details.service';

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
    CatalogAddUpdateComponent,
    ProductAddUpdateComponent,
    CatalogViewComponent,
    ProductViewComponent,
    SubCategoryComponent,
    CatalogAddComponent,
    BuyerComponent
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
    BuyerDetailsService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

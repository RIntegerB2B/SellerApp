import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NavHeaderComponent} from './shared/nav-header/nav-header.component';
import { Routing } from './app.route';


import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import {AccountService} from './account/account.service';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    WelcomeComponent,
    SignInComponent
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
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

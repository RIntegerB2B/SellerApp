import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { PwdChangeRequestComponent } from './account/pwd-change-request/pwd-change-request.component';
import { PwdChangeResetComponent } from './account/pwd-change-reset/pwd-change-reset.component';
import { SuperCategoryComponent } from './category/super-category/super-category.component';
import { MainCategoryComponent } from './category/main-category/main-category.component';
import { CatalogAddUpdateComponent } from './product/catalog-add-update/catalog-add-update.component';
import {SubCategoryComponent} from './category/sub-category/sub-category.component';
import {CatalogViewComponent} from './product/catalog-view/catalog-view.component';
import {CatalogAddComponent} from './product/catalog-add/catalog-add.component'

const routes: Routes = [
    { path: 'AddCategory', component: AddCategoryComponent },
    { path: 'SubCategory', component: SubCategoryComponent },
    { path: 'Welcome', component: WelcomeComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'Home', component: HomePageComponent },
    { path: 'PwdChangeReq', component: PwdChangeRequestComponent },
    { path: 'PwdChangeReset/:key', component: PwdChangeResetComponent },
    { path: 'SuperCategory', component: SuperCategoryComponent },
    { path: 'MainCategory', component: MainCategoryComponent },
    { path: 'Catalog', component: CatalogAddUpdateComponent },
    {path:'CatalogAdd',component: CatalogAddComponent},
    {path:'CatalogView',component: CatalogViewComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' },
   

    
];

export const Routing = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });

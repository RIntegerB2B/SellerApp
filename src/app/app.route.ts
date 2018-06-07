import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import {PwdChangeRequestComponent} from './account/pwd-change-request/pwd-change-request.component'
const routes: Routes = [
    { path: 'AddCategory', component: AddCategoryComponent },
    { path: 'Welcome', component: WelcomeComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'Home', component: HomePageComponent },
    { path: 'PwdChangeReq', component: PwdChangeRequestComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);

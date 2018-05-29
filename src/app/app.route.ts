import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { HomePageComponent } from './home/home-page/home-page.component';
const routes: Routes = [
    { path: 'Welcome', component: WelcomeComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'Home', component: HomePageComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
const routes: Routes = [
    { path: 'Welcome', component: WelcomeComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
    { path: '**', redirectTo: 'SignIn', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
    { path: 'Welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'Welcome', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);

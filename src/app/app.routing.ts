import { AccountComponent } from './account/account.component';


import { Routes, RouterModule } from '@angular/router';

const APP_ROUTE: Routes = [
    { path: '', redirectTo: '/account', pathMatch: 'full' },
    { path: 'account', component: AccountComponent},
    { path: '**', redirectTo: '/account' },
]

export const routing = RouterModule.forRoot(APP_ROUTE);
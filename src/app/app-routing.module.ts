import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './utility/app.guard'

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', loadChildren: () => import('./components/welcome/welcome.component').then(m => m.WelcomeComponent) },
    { path: 'profile', loadChildren: () => import('./components/profile/profile.component').then(m => m.ProfileComponent), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

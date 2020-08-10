import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { RandomGuard } from './_guards/random.guards';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  {path:'login', canActivate: [AuthGuard], loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  {path: 'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'profile', canLoad: [RandomGuard],loadChildren:() => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'payment', loadChildren:() => import('./payment/payment.module').then(m => m.PaymentModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

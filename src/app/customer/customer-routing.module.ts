import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './Components/shop/shop.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { ShopDetailComponent } from './Components/shop-detail/shop-detail.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from '../admin-panel/Components/login/login.component';
import { SignUpComponent } from '../admin-panel/Components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/shop', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'shop', component: ShopComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'shop-detail/:Id', component: ShopDetailComponent },
      { path: 'cart', component: CartComponent },
      {path: 'login', component:LoginComponent},
      {path:'register',component:SignUpComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

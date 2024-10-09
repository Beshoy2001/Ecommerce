import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopDetailComponent } from './Components/shop-detail/shop-detail.component';
import { SharedModule } from '../shared/shared.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    ContactUsComponent,
    ShopComponent,
    ShopDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    MatSlideToggleModule
  ]
})
export class CustomerModule { }

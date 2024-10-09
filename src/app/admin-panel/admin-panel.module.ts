import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
   
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    SharedModule
]
})
export class AdminPanelModule { }

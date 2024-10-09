import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/Components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: "customer", pathMatch: 'full' },
  
  { path: 'customer', 
    loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule) },
  
  { path: 'admin-panel', 
    loadChildren: () => import('./admin-panel/admin-panel.module').then(mod => mod.AdminPanelModule) },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

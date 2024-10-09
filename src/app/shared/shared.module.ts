import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SelectComponent } from './Components/select/select.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { ErrorComponent } from './Components/error/error.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    SpinnerComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }

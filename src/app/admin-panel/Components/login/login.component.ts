import { Component } from '@angular/core';
import { AuthService } from '../../../customer/Service/auth.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authServ: AuthService , private router : Router) { }
  user = {
    userName: '',
    password: ''
  }

  Login() {
    this.authServ.LogIn(this.user).subscribe({
      next: (response: any) => {
        console.log(response);
        alertify.success('Welcome ' + response.userName)
        localStorage.setItem('token',response.token.accessToken);
        localStorage.setItem('userName',response.userName);
        localStorage.setItem('userId',response.userId);
        this.router.navigate(['customer/home/shop']);
      },
      error: (e) => {
        console.info(e);
        alertify.error(e.error);
      }
    });
  }
 
}

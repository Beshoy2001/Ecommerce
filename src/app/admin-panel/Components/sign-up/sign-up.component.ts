import { Component } from '@angular/core';
import { RolesService } from '../../../customer/Service/roles.service';
import * as alertify from 'alertifyjs';
import { AuthService } from '../../../customer/Service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  roles: any = [];

  newUser = {
    name: '',
    userName: '',
    password: '',
    city: '',
    address: '',
    email: '',
    role: 0
  };
  verifyPass: string = "";
  constructor(private roleServ: RolesService, private authServ: AuthService , private router : Router) {
    roleServ.getRoles().subscribe({
      next: (response) => { this.roles = response; },
      error: (e) => { alertify.error("Error !"); }
    });
  }

  register() {
    if (this.verifyPass !== this.newUser.password) {
      alertify.error('Verify Password is not the same with password !');
      return;
    }
    else {
      this.authServ.Register(this.newUser).subscribe({
        next: (response) => {
          alertify.success("Registeration is successfull. Please Login.");
          
          this.router.navigate(['customer/home/login']);
        },

        error: (e) => {
          alertify.error("Error in Registeration !");
        },

      });
    }
  }

}

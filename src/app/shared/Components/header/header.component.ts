import { Component } from '@angular/core';
import { CartService } from '../../../customer/Service/cart-service.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount: Number = 0;

  constructor(private cartServ: CartService, private router: Router) {
    cartServ.cartCount.subscribe({
      next: (c) => this.cartCount = c,
      error: (e) => console.log(e),
      complete: () => { }
    });
  }
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }
  GetUserName() {
    return localStorage.getItem('userName');
  }

  LogOut() {
    alertify.confirm('Are you sure to LogOut ?', () => {
      localStorage.clear();
      this.router.navigate(['customer/home/login']);
    });
  }
}

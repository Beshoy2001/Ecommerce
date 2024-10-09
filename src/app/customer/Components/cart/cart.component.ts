import { Component } from '@angular/core';
import { CartService } from '../../Service/cart-service.service';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartList: any[] = [];
  constructor(private cartServ: CartService) {
    this.cartList = cartServ.loadList("LIST");
  }
  GetTotal() {
    let total = 0;
    this.cartList.forEach(element => {
      total += element.quantity * element.price;
    });
    return total;
  }
  plus(item: any) {
    item.quantity += 1;
    this.GetTotal();
  }
  minus(item: any) {
    if (item.quantity != 1) {
      item.quantity -= 1;
    }
    this.GetTotal();
  }
  remove(item: any) {
    let indexToDel = this.cartList.findIndex(c => c.id == item.id);
    if (indexToDel != -1) {
      this.cartList.splice(indexToDel, 1);
    }

    this.cartServ.saveList("LIST", this.cartList);
    this.cartServ.cartBehavior.next(this.cartList.length);
    alertify.success(item.name + " is removed to cart.");

    this.GetTotal();
  }
}

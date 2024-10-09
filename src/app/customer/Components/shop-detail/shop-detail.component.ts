import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as alertify from 'alertifyjs'
import { ProductService } from '../../Service/product.service';
import { Product } from '../../../../Models/Product';
import { CartService } from '../../Service/cart-service.service';
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrl: './shop-detail.component.css'
})
export class ShopDetailComponent {
  cartList:any[];

  product: any = {};
  quantity: number = 1;
  constructor(private activeRoute: ActivatedRoute, private prodServ: ProductService, private cartServ: CartService) {
    activeRoute.params.subscribe(result => {
      prodServ.getProduct(result['Id']).subscribe({
        next: (p) => { this.product = p; console.log(p); },
        error: (e) => console.log(e.message)
      });
    });

    this.cartList = cartServ.loadList("LIST");
  }
  plus() {
    this.quantity += 1;
  }
  minus() {
    if (this.quantity != 1) {
      this.quantity -= 1;
    }
  }

  AddtoCart(prod: Product) {
    var existedIndex = this.cartList.findIndex(p => p.id == prod.id);
    if (existedIndex !== -1) {
      this.cartList[existedIndex].quantity = this.quantity;
    }
    else {
      let cardItem = {
        id: prod.id,
        name: prod.name,
        quantity: this.quantity,
        image: prod.imageBin,
        price: prod.price,
        rating: prod.rating,
        description: prod.description
      }
      this.cartList.push(cardItem);
    }
    console.log(this.cartList);
    this.cartServ.saveList("LIST", this.cartList);
    this.cartServ.cartBehavior.next(this.cartList.length);
    alertify.success(prod.name + " is added to cart.");
  }


}

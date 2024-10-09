import { Component } from '@angular/core';
import { CategoryService } from '../../Service/category.service';
import { MainCategory } from '../../../../Models/MainCategory';
import { Product } from '../../../../Models/Product';
import { ProductService } from '../../Service/product.service';
import * as alertifyjs from 'alertifyjs';
import { CartService } from '../../Service/cart-service.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  MainCategories: MainCategory[] = [];
  products: Product[] = [];
  isLoading: boolean = false;

  constructor(private categoryServ: CategoryService, private prodServ: ProductService, private cartSev: CartService) {
    this.categoryServ.getMainCategories().subscribe(
      {
        next: (data: MainCategory[]) => {
          this.MainCategories = data;
          console.log(data)
        },
        error: (e) => { alertifyjs.error('Server is Down !'); console.error(e) },
        complete: () => console.info('complete')
      });
     this.cartList = this.cartSev.loadList("LIST");
     this.cartSev.cartBehavior.next(this.cartList.length);
  }

  changeProduct(subCatId: number) {
    console.log(subCatId);
    this.isLoading = true;
    setTimeout(() => {
      this.prodServ.getProducts(subCatId).subscribe({
        next: (data) => { this.products = data; console.log(data); },
        error: (e) => { console.log(e); alertifyjs.error('Server is Down !'); this.isLoading = false; },
        complete: () => { this.isLoading = false; }
      })
    }, 500);

  }
  cartList: any[] = [];
  AddtoCart(prod: Product) {
    var existedIndex = this.cartList.findIndex(p => p.id == prod.id);
    if (existedIndex !== -1) {
      this.cartList[existedIndex].quantity += 1;
    }
    else {
      let cardItem = {
        id: prod.id,
        name: prod.name,
        quantity: 1,
        image: prod.imageBin,
        price: prod.price,
        rating: prod.rating,
        description: prod.description
      }
      this.cartList.push(cardItem);
    }
    console.log(this.cartList);
    this.cartSev.saveList("LIST", this.cartList);
    this.cartSev.cartBehavior.next(this.cartList.length);
    alertifyjs.success(prod.name + " is added to cart.");
  }
}

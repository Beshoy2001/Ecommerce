import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartBehavior = new BehaviorSubject<Number>(0);
  cartCount = this.cartBehavior.asObservable();

  constructor() { }

  saveList(key:string,value:any[]){
    localStorage.setItem(key,JSON.stringify(value));
  }
  loadList(key:string){
    return JSON.parse(localStorage.getItem(key) || '[]'); 
  }
}

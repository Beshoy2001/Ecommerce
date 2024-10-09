import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../Models/Product';
import { API } from '../../../Models/API';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseURL: string = API.baseURL;
  prodList: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(subCatId: number) {
    return this.http.get<Product[]>(this.baseURL + "Product/GetProductBySubCategory/" + subCatId);
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.baseURL + "Product/" + id);
  }

  getAllProducts() {
    return this.http.get(this.baseURL + "product");
  }

  saveNewProduct(formData: FormData) {
    console.log(formData);
    return this.http.post(this.baseURL + "Product", formData);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseURL + "product?id=" + id);
  }
}

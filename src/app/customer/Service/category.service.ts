import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainCategory } from '../../../Models/MainCategory';
import { API } from '../../../Models/API';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
baseURL:string = API.baseURL;
  getMainCategories(){
   
   return this.http.get<MainCategory[]>(this.baseURL + "MainCategory");
  }
}

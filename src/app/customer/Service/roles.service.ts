import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../../Models/API';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
baseURL = API.baseURL;
  constructor(private http:HttpClient) { }

  getRoles(){
    return this.http.get(this.baseURL + "Roles");
  }
}

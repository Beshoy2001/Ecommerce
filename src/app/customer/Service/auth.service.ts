import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../../Models/API';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = API.baseURL;
  constructor(private http: HttpClient) { }

  LogIn(user: any) {
    return this.http.post(this.baseURL + "Auth/Login", user);
  }

  Register(newUser:any){
    return this.http.post(this.baseURL + "Auth/Register", newUser);
  }

}


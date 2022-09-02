import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { LoginStatus } from './login-status';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  // url = 'http://localhost:3000/users';
  url = 'http://localhost:8085/user';
  constructor(private http: HttpClient) { }

  public logindata(){
    return this.http.get<Login[]>(this.url);
  }



}

import { Injectable } from '@angular/core';
import { LoginStatus } from './login-status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  s : LoginStatus;
  constructor() { 
    this.s = new LoginStatus();
  }

  setStatus(s:string){
    this.s.status = s;
  }

  getStatus():string{
    return this.s.status;
  }
}

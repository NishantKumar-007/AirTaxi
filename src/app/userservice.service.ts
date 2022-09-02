import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { users } from './registration/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
//   private userList: users[] = [{
//     firstName: 'Ankit Sahu',
//     lastName:"werr",
//     password:"oiiuuh",
//     confirmpassword:"oiiuuh",
//     dob: new Date('08/31/1992'),
//     email_Id: 'ankit@gmail.com',
//     mobile_no: '8978786933'
   
// }];

//  baseUrl:string= "http://localhost:3000/users";
  baseUrl:string= "http://localhost:8085/user-register";
  constructor(private httpSer :HttpClient) { }
    

  addUser(u:users):Observable<Object>{
   console.log(u);
   console.log( this.httpSer.post(this.baseUrl, u));
  return this.httpSer.post(this.baseUrl,u);
 }

 deleteTicket(id : number){
 return this.httpSer.delete(this.baseUrl+id) 
 .pipe(map((data:any)=>{
  return data;
 }))
 }

}

import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { BookingDetails } from './my-booking/booking-details';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  //url:string ="http://localhost:3000/BookingDetails";
  url:string ="http://localhost:8085/booking";

  public setBooking(b:BookingDetails):Observable<object>{
    console.log(b);
    return this.http.post<BookingDetails>(this.url,b);
  }

  public getBooking(email:string):Observable<any>{
    //let param1 = new HttpParams().set('email_Id',email);
    return this.http.get(this.url+'/'+email);
  }
  //{params:param1}

  public deleteBooking(booking_id:Number){
    console.log()
    return this.http.delete(this.url+'/'+booking_id);
 }

  
}

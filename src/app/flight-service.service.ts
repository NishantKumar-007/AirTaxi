import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDetails } from './flight-details';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http:HttpClient) { }

  //url:string ="http://localhost:3000/flight-details";
  url:string ="http://localhost:8085/flight"
  getFlights(){
    return this.http.get<FlightDetails[]>(this.url);
  }
}

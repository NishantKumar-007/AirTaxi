import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightDetails } from './admin/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  flightList:FlightDetails[]=[];

  //baseURL:string="http://localhost:3000/flight";
  baseURL:string="http://localhost:8085/adminflight";

  constructor(private httpSer:HttpClient) { }

  public getFlights()
  {
    return this.httpSer.get<FlightDetails[]>(this.baseURL);
  }

  public addFlight(f:FlightDetails):Observable<Object>{
    return this.httpSer.post<FlightDetails>(this.baseURL,f);
  }

  public updateFlight(f:FlightDetails){
    //console.log(f.flight_id);
    //alert("Service called"+JSON.stringify(f));
    return this.httpSer.put(this.baseURL + '/' + f.flight_id, f);
  }

  public deleteEmp(flight_id:number){
    return this.httpSer.delete(this.baseURL + '/' +flight_id);
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { FlightDetails } from './flight-details';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  fl : FlightDetails;
  constructor(){ 
    this.fl = new FlightDetails;
  }

    storedata(f:FlightDetails){
      this.fl = f;
      console.log(f);
      return "data stored";
    }

    getdata(){
      return this.fl;
    }
 
  }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDetails } from '../flight-details';
import { FlightServiceService } from '../flight-service.service';
import { LoginStatus } from '../login-status';
import { SearchService } from '../search.service';
import { StatusService } from '../status.service';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  myvar : string = '';
  msg:any;
  amount:any;
  source:any;
  destination:any;
  dod: any;
  departTime: any;
  arrivalTime:any;
  status :LoginStatus;
  flightDetails : FlightDetails[] = [];
  searchDetails : FlightDetails;
  displayList : Array<FlightDetails>;


  constructor(public rs:FlightServiceService, private service:SearchService, private st :StatusService,private router :Router) {
    this.searchDetails = new FlightDetails;
    this.displayList = new Array<FlightDetails>;
   }
  
  ngOnInit(): void {
   
   
    this.rs.getFlights().subscribe((response) => {
      this.flightDetails = response;
      this.searchDetails = this.service.getdata();
      
      if(this.searchDetails.type=="Business"){
        this.myvar = "Business"
       
      }
      else {
        this.myvar = "Economy"
       
      }
      this.getdisplayList();
      
    
    });
    //console.log(this.flightDetails);
   
    // console.log(this.searchDetails);
    //this.getdisplayList();
   
  }

  getdisplayList(){

    for(let f of this.flightDetails){
      // console.log(f.src);
      // console.log(this.searchDetails.src);
      if(this.searchDetails.source==f.source && this.searchDetails.destination == f.destination)
      {
        // console.log("2");
        this.displayList.push(f);
      //   console.log(this.displayList);
      }
    }

  }

  onBook(){
      console.log(this.st.getStatus());



    if(this.st.getStatus()=="FAILED")
    {
      alert("You need to login first");
      this.router.navigate(['/login']);
    }
    else{
      this.msg = document.getElementById("fid")?.textContent;
      this.amount = document.getElementById("price")?.textContent;
      this.source = document.getElementById("fcity")?.textContent;
      this.destination = document.getElementById("tcity")?.textContent;
      this.departTime = document.getElementById("fdepart")?.textContent;
      this.arrivalTime = document.getElementById("farrival")?.textContent;
    
      sessionStorage.setItem("flight_details",this.msg);
      sessionStorage.setItem("amount",this.amount);
      sessionStorage.setItem("source",this.source);
      sessionStorage.setItem("dest",this.destination);
      sessionStorage.setItem("departTime",this.departTime);
      sessionStorage.setItem("arrivalTime",this.arrivalTime)
      
      
      this.router.navigate(['passenger']);
     
    }
    
  }
}
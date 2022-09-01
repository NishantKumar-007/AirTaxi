import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { FlightDetails } from '../Admin';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {

  flightList:FlightDetails[]=[]

  constructor(private adminSer:AdminService ,private router:Router){ }

  ngOnInit(): void {
    this.adminSer.getFlights().subscribe(data=>this.flightList=data);
  }

  editFlights(f:FlightDetails){
    console.log(f);
    sessionStorage.setItem("Flight",JSON.stringify(f));
    this.router.navigate(['admin/editflights']);
  }

  deleteFlights(f:FlightDetails){
    let result = confirm("Do you want to delete the Flight ?")

    if(result)
    {
      this.adminSer.deleteEmp(f.flight_id)
      .subscribe(data => {
        this.flightList = this.flightList.filter(u => u !== f);
      });
    }
  }
  

}

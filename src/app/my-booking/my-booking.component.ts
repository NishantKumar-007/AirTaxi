import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { StatusService } from '../status.service';
import { BookingDetails } from './booking-details';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

 
  details:BookingDetails[]=[];
  username:any = sessionStorage.getItem("username");
  constructor(private bookserv:BookingService, private st:StatusService, private router:Router) { }
  ngOnInit(): void {
   
    if(this.st.getStatus()=="FAILED")
    {
      alert("You need to login first");
      this.router.navigate(['/login']);
    }
    else
    this.fetchBooking();
  
  }

  public fetchBooking(){

    this.bookserv.getBooking(this.username).subscribe(data=>this.details=data);
  
  }


  cancelTicket(b:BookingDetails){
    let result = confirm('Do you want to cancel the ticket?')

    if(result){
      this.bookserv.deleteBooking(b.booking_id)
      .subscribe(data => {
        this.details.filter(u => u !==b);
      })
    }
    this.fetchBooking();
    window.location.reload();
  }

 }

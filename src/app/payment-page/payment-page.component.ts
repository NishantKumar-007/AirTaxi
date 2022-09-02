import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { BookingDetails } from '../my-booking/booking-details';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  username:any = sessionStorage.getItem("username");
  amount : any;
  details : BookingDetails = new BookingDetails();
  constructor(private router:Router,private service :BookingService) { }

  ngOnInit(): void {
    this.amount=sessionStorage.getItem("amount");
  }

  clickMethod(){
    if(confirm("Are you sure you want to pay")) {
      this.details.amount = sessionStorage.getItem("amount");
      this.details.flightName = sessionStorage.getItem("flight_details");
      this.details.seatNo = sessionStorage.getItem("seat");
      this.details.source = sessionStorage.getItem("source");
      this.details.destination = sessionStorage.getItem("dest");
      this.details.arrivalTime = sessionStorage.getItem("arrivalTime");
      this.details.departureTime = sessionStorage.getItem("departTime");
      this.details.age= sessionStorage.getItem("age");
      this.details.passengerName= sessionStorage.getItem("name");
      this.details.email_Id = sessionStorage.getItem("username");
      this.details.bookingDate = sessionStorage.getItem("doj");
      alert("Your payment was successful");

      this.service.setBooking(this.details).subscribe((data:any)=>{
      alert("record added");
      })
      this.service.getBooking(this.username).subscribe((data:any)=>{
        console.log(data);
      });
      this.router.navigate(['/myBooking']);
    }
    else
    {
      alert("Sorry your payment failed")
    }
  }
}

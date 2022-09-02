import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BookingService } from '../booking.service';
import { BookingDetails } from '../my-booking/booking-details';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @ViewChild('invoice') invoiceElement!: ElementRef;
  details: BookingDetails [] =[];
  tid : number;
  username:any = sessionStorage.getItem("username");
  constructor(private bookserv : BookingService) { }

  ngOnInit(): void {
    this.fetchBooking;
    // let u   = sessionStorage.getItem("ticketId");
    // console.log(parseInt(u!));
    // this.tid = parseInt(u!);
    // console.log(this.username);
    // this.bookserv.getBooking(this.username).subscribe(data=>this.details=data);
    // console.log(this.details);
  }

  public fetchBooking(){
    alert("1")
    this.bookserv.getBooking(this.username).subscribe(data=>this.details=data);
    console.log(this.details)
  
  }



  public generatePDF(): void {

    this.bookserv.getBooking(this.username).subscribe(data=>this.details=data);
    console.log(this.details)

    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('ticket.pdf');
    });
  }

}

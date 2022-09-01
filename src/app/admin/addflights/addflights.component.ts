import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-addflights',
  templateUrl: './addflights.component.html',
  styleUrls: ['./addflights.component.css']
})
export class AddflightsComponent implements OnInit {
  flightForm!:FormGroup;

  constructor(private fb:FormBuilder, private adminSer:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
     flight_id : ['', Validators.required],
     flightName: ['', Validators.required],
     capacity :  ['',Validators.required],
     economyPrice : ['',Validators.required],
     businessPrice : ['',Validators.required],
     departureTime : ['',Validators.required],
     arrivalTime : ['',Validators.required],
     source: ['',Validators.required],
     destination: ['',Validators.required]
    });
  }

  onSubmit(){
    this.adminSer.addFlight(this.flightForm.value)
    .subscribe(
      (data:any) => {
        alert("Data added Successfully")
        console.log(this.flightForm.value)
      }
    );
    this.router.navigate(['admin/viewflights']);
  }

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-editflights',
  templateUrl: './editflights.component.html',
  styleUrls: ['./editflights.component.css']
})
export class EditflightsComponent implements OnInit {
  f1:any;
  flightForm!:FormGroup;
  
  constructor(private fb:FormBuilder, private adminSer : AdminService,private router:Router) { }

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
     this.f1 = sessionStorage.getItem("Flight");
     console.log(this.f1);
     this.flightForm.setValue(JSON.parse(this.f1));
  }

  onSubmit(){
    this.f1 = sessionStorage.getItem("Flight");
    //alert(this.f1);
    //this.f1 = this.flightForm.value;
    //alert(JSON.stringify(this.flightForm.value));
    this.adminSer.updateFlight(this.flightForm.value)
    .subscribe(
      data => {
        this.router.navigate(['admin/viewflights']);
      }
    );
  }

}


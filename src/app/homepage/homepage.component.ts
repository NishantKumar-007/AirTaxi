import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, RouterEvent, RouterLink, RouterModule } from '@angular/router';
import { FlightDetails } from '../flight-details';
import { FlightServiceService } from '../flight-service.service';
import { LoginStatus } from '../login-status';
import { SearchService } from '../search.service';
import { StatusService } from '../status.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  status :string|null;
  myForm : FormGroup;
  msg :string = '';
  
  // public searchto :FlightDetails = new FlightDetails();

  // data : any;
  constructor(fb:FormBuilder,public service: SearchService, private router:Router, private ss:StatusService) {

    this.myForm = new FormGroup({
      source :new FormControl(''),
      destination : new FormControl(''),
      dod :new FormControl(''),
      doa : new FormControl(''),
      type : new FormControl('')

    });

    }
   
  ngOnInit():void{
    console.log("init");
    this.status = sessionStorage.getItem("loginStatus");
    console.log(this.ss.getStatus());
    if(this.status==null){
      this.ss.setStatus("FAILED");
      console.log(this.ss.getStatus());
      sessionStorage.setItem("loginStatus","session_started")
    }
    if(sessionStorage.getItem("show")=="login"){
      this.ss.setStatus("FAILED");
    }

    sessionStorage.setItem("adminlogin","admin@lti");
    sessionStorage.setItem("adminpass","admin@123")
    
  }

 
  onSubmit(){
    console.log('you submitted value: ', this.myForm.value);
    this.msg  =  this.service.storedata(this.myForm.value);
    console.log(this.msg);
     this.router.navigate(['searchResult']);
  }
}

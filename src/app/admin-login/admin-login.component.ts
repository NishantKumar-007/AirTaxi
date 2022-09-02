import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Admincred } from './admincred';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  fValue : Admincred;
  adminForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) {
   
    this.adminForm = new FormGroup({
      adminemail: new FormControl(''),
      adminpass : new FormControl(''),
    });
   
   }

  ngOnInit(): void {
   
    
   
}
onSubmit(){
  console.log("Hello");
  console.log(this.adminForm.value);
  this.fValue = this.adminForm.value;
  console.log(this.fValue.adminemail);
  if(this.fValue.adminemail==sessionStorage.getItem("adminlogin") && this.fValue.adminpass==sessionStorage.getItem("adminpass")){
    alert("Login Successful");
    this.router.navigate(['admin/Admin']);
  }
  else{
    alert("Invalid Admin Credentials")
  }
  
}
}

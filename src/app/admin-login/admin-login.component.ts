import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  fValue : Login;
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
  console.log(this.fValue.email_Id);
  if(this.fValue.email_Id==sessionStorage.getItem("adminlogin")){
    alert("login successful");
    this.router.navigate(['admin/Admin']);
  }
  else{
    alert("invalid admin")
  }
  
}
}

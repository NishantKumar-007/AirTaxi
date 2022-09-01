import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../login';
import { LoginStatus } from '../login-status';
import { StatusService } from '../status.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allusers : Login[];
  loginForm:FormGroup;
  status :LoginStatus = new LoginStatus;
  formValue : Login = new Login();
  tempValue : Login = new Login();
  userEmail : string;
  password:string;
  
  constructor(private loginService:AuthenticationService,private router: Router,private st:StatusService) {
    this.loginForm = new FormGroup({
      email_Id : new FormControl(''),
      password : new FormControl('')
    }
     
    );
   }

  ngOnInit(): void {
      this.status.status="FAILED" 
  }

  loginUser() {
    console.log('you submitted value: ', this.loginForm.value);
    this.loginService.logindata().subscribe((data)=>{
      this.allusers = data;
     
      this.formValue = this.loginForm.value;
      //console.log(this.formValue);
     this.checkValidity();
    })
}

  checkValidity(){
    
    for(let u of this.allusers){
      this.userEmail = u.email_Id;
      this.password= u.password;
      if(this.formValue.email_Id==this.userEmail && this.formValue.password==this.password){
      alert("you are successfully logged in");
      this.status.status = "SUCCESSFUL";
      this.st.setStatus("SUCCESSFUL");
      this.router.navigate(['']);
      alert("Welcome User");
      sessionStorage.setItem("username",this.formValue.email_Id);
      sessionStorage.setItem("show","logout");
      // window.location.reload();
      break;
      }
    }
    
    if(this.status.status=="FAILED"){
      console.log(this.st.getStatus());
      alert("Enter correct Username or Password");
    }
    this.router.navigate(['/']);

  }

  
}

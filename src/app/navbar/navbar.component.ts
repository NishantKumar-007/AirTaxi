import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { LoginStatus } from '../login-status';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  s:string|null;
  status : LoginStatus = new LoginStatus;
  constructor(private service :StatusService,private router:Router) { }

  ngOnInit(): void {
  let show = sessionStorage.getItem("show");
  if(show==null || show=="login"){
  let x :any= document.getElementById("logout");
  x.style.display= "none";
  sessionStorage.setItem("show","login");
  }
  else{
  let x :any= document.getElementById("logout");
  x.style.display= "block";
  let y :any= document.getElementById("login");
  y.style.display= "none";
  let z :any= document.getElementById("register");
  z.style.display= "none";
  }
  //this.ngOnInit();
  }

  onLogout(){
    this.status.status = "FAILED";
    this.service.setStatus(this.status.status);
    console.log(this.service.getStatus());
    sessionStorage.setItem("show","login")
    let x :any= document.getElementById("logout");
    x.style.display= "none";
    let y :any= document.getElementById("login");
    y.style.display= "block";
    let z :any= document.getElementById("register");
    z.style.display= "block";
   
    sessionStorage.clear();
    this.router.navigate(['/']);
    
  }



}

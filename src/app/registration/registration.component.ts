import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { users } from './users.interface';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   constructor(public formBuilder:FormBuilder, private router: Router,private service:UserserviceService) { }
userForm:FormGroup;
user: users = new users();


submitted: boolean = false;

  ngOnInit(){ 
    this.userForm = this.formBuilder.group({
     title: new  FormControl('',Validators.required),
    firstName :new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    email_Id: new FormControl('',Validators.compose([Validators.required, Validators.email])),
    password:new FormControl('',Validators.required),
    confirmpassword : new FormControl('',Validators.required),
    dob : new FormControl('',Validators.required),
    mobile_No : new FormControl('',Validators.compose([Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]))
  
    } ); }

    get f(){
      return this.userForm.controls;
    }

  onCancel(){
  this.userForm.reset();
  this.router.navigate(['/']);

}
   
  onRegister(){
      this.submitted=true;
      if(this.userForm.invalid){
        return
      };
     
   
}
createUser(){
  // alert(JSON.stringify(this.userForm.value));
  this.user = this.userForm.value;
  this.service.addUser(this.user).subscribe(data=>{
    console.log(data);
    alert("Registered Succesfully!!");
    // let service = document.getElementById('cancel')
    // service?.click();
    // this.userForm.reset();
  }
  // this.router.navigate(['/']);
  ); 
}


  onSubmit(){
    this.createUser();
    
  }

}


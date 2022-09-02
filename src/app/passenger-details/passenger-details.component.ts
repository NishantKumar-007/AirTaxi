import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Passenger } from './passenger';


@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  passForm:FormGroup;
  passenger = new Passenger();

 public passarray : any[] = [{
   passengerName: '',
   age:''
 }]

 
 constructor(private formBuilder: FormBuilder, private router:Router) { 
   this.passarray=[];
 }

 ngOnInit(){
  
    this.passenger =new Passenger()
   this.passarray.push(this.passenger);
  }

addForm()
{
//  const uniqueID = uuid.v4();
 this.passarray.push({
  //  id: uniqueID,
   passengerName:'',
   age:'',

 })


}


removeForm(uId: number){
 const index = this.passarray.findIndex((obj)=>obj.id===uId);
 this.passarray.splice(index,1);
}

 onSubmit(){
   sessionStorage.setItem("name",this.passarray[0].passengerName);
   sessionStorage.setItem("age",this.passarray[0].age);
   console.log(sessionStorage.getItem("name"));
   console.log(sessionStorage.getItem("age"));
  this.router.navigate(['/seat']);
 }

}

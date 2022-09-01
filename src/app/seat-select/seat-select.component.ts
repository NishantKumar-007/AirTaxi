import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {


 
  constructor() {
  
   }
   addSeat(){
      
  }

  ngOnInit(): void{
    
    let current = sessionStorage.getItem("seatlist");
    current = JSON.stringify(current);


    let arr = document.getElementsByTagName("label");
    for(var i=0;i<arr.length;i++){
      arr[i].addEventListener("click",function handleclick(this:HTMLElement){
        console.log(this.innerHTML);
        sessionStorage.setItem("seat",this.innerHTML);
      })
    }




    }

  
  }


  
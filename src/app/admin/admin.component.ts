import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  ngOnInit(): void {
   
  }
  constructor(private route:Router)
 {
  
 }
 admin(){
  
  this.route.navigate(["Login"]);
  alert("Registered successfully");

 }

  
  

}

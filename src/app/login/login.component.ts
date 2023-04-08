import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 constructor(private route:Router)
 {
  
 }
 onsubmit(){
  console.log("hhhhhhhhhhhhhhh");
  
  this.route.navigate(["food-page"]);

 }
 Register()
 {
  this.route.navigate(['admin']);
 }
}

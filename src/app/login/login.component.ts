import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userNameOrEmail:string = "";
  password:string="";

  signIn(form:NgForm){
    if(this.userNameOrEmail===""){
      alert("username or email must be valid");
      return;
    }
    if(this.password===""){
      alert("password must be valid");
      return;
    }
    console.log(this.userNameOrEmail);
    console.log(this.password);
    
  }
}

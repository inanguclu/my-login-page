import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isShowPassword: boolean = false;
  isPasswordFocus: boolean = false;
  constructor(private toastr:ToastrService){
    
  }



  signIn(form: NgForm) {
    if (form.valid) {
      console.log(form);
      console.log(form.value);
    }
      
    
  }

  showOrHidePassword(password: HTMLInputElement) {
    if (this.isShowPassword) {
      this.isShowPassword = false;

      password.type = "password";
    } else {
      this.isShowPassword = true;

      password.type = "text";
    }

  }

  checkRegexPatternForPassword(el: HTMLInputElement) {
    const text = el.value;

    //buyuk harf kontrol
    const upperCaseRegex = /[A-Z]/;
    const upperCaseResult = upperCaseRegex.test(text);
    const upperLetterEl = document.getElementById("upperLetter");
    upperLetterEl?.classList.add(upperCaseResult ? 'pw-success' : 'pw-error');
    upperLetterEl?.classList.remove(!upperCaseResult ? 'pw-success' : 'pw-error');

    //kucuk harf kontrol
    const lowerCaseRegex = /[a-z]/;
    const lowerCaseResult = lowerCaseRegex.test(text);
    const lowerLetterEl = document.getElementById("lowerLetter");
    lowerLetterEl?.classList.add(lowerCaseResult ? 'pw-success' : 'pw-error');
    lowerLetterEl?.classList.remove(!lowerCaseResult ? 'pw-success' : 'pw-error');

    //özel harf kontrol
    const specialCaseRegex = /[!@#$%^&*()_+\-=\[\]{};:'\\|,.<>\/?]+/;
    const specialCaseResult = specialCaseRegex.test(text);
    const specialLetterEl = document.getElementById("specialLetter");
    specialLetterEl?.classList.add(specialCaseResult ? 'pw-success' : 'pw-error');
    specialLetterEl?.classList.remove(!specialCaseResult ? 'pw-success' : 'pw-error');

    //numeratic harf kontrol
    const numeraticCaseRegex = /[0-9]/;
    const numeraticCaseResult = numeraticCaseRegex.test(text);
    const numeraticLetterEl = document.getElementById("numeraticLetter");
    numeraticLetterEl?.classList.add(numeraticCaseResult ? 'pw-success' : 'pw-error');
    numeraticLetterEl?.classList.remove(!numeraticCaseResult ? 'pw-success' : 'pw-error');



    //MİNİMUM 6 KARAKTER kontrol
    const minSixCharacterEl=document.getElementById("minSixCharacter");
    if(text.length<6){
      minSixCharacterEl?.classList.add("pw-error");
      minSixCharacterEl?.classList.remove("pw-success");
    }else {
      minSixCharacterEl?.classList.remove("pw-error");
      minSixCharacterEl?.classList.add("pw-success");
    }

  }



}

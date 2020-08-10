import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register/register.service';
import { loginUser } from './login.model';
import { AuthService } from '../_services/auth.service';
import { Tokens } from '../_services/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted =  false; 
  loginErrorMsg : string;
  errState : boolean = false;
  constructor(private fb : FormBuilder, private authService: AuthService, private router:Router) { 
    this.loginForm = this.fb.group({
      username : ["", [Validators.required,Validators.email]],
      password : ["", [Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
   
  }


  get loginFormControl() {
    return this.loginForm.controls;
  } 

  loginUser() {
    this.authService.login(this.loginForm.value).subscribe((response : boolean) => {
      this.router.navigate(['/profile/view']);
    },((err) => {
      this.errState = true;
      this.loginErrorMsg = err.msg;
     }))
  
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // display form values on success
  }


}

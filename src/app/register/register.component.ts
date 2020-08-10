import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { RegisterService } from './register.service';
import {  ConfirmedValidator} from '../_helpers/customValidator';
import { registerUser } from './register.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  registerErrorMsg : string;
  errState : boolean = false;
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required,Validators.minLength(8)]],
        confirm_password: ['',  Validators.required],
      },
      { validator: ConfirmedValidator('password','confirm_password') }
    );
  }

  ngOnInit(): void {}




  get registerFormControl() {
    return this.registerForm.controls;
  } 

  registerUser() {
    this.registerService
      .getRegisterRes(this.registerForm.value)
      .subscribe((res: registerUser) => {
      },((err) => {
       this.registerErrorMsg = err.msg;
       this.errState = true;
      }));

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
}

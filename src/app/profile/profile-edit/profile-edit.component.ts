import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  response : string;
  addressForm :  FormGroup;
applyButton : boolean = false;
continueButton  :boolean = false;
submitted : boolean = false;

  constructor(private fb : FormBuilder, private profileService : ProfileService, private router :Router) {

  }
  ngOnInit(): void {
    this.profileService.currentAddress.subscribe((res:any) => {
        this.createForm(res);
     
   
    } )

    this.profileService.currentcompName.subscribe((res:string) => {
      if(res == 'payment'){
          this.applyButton = false;
          this.continueButton = true;
        } else {
          this.applyButton = true;
          this.continueButton = false;
        }
    })
  }



  createForm(response : any) {
    this.addressForm =  this.fb.group(
      {
        flat: [response.flat],
        building: [response.building],
        area: [response.area],
        city : [response.city],
        state : [response.state],
        pincode : [response.pinCode]
      })
  }

  saveAddress() {
    this.submitted = true;
    var address = {
      'area': this.addressForm.value.area,
      "building": this.addressForm.value.building,
      "city": this.addressForm.value.city,
      "flat": this.addressForm.value.flat,
      "pinCode": this.addressForm.value.pincode,
      "state": this.addressForm.value.state
    }

    var addressData = {address : address};
    this.profileService.editProfileUserDetails(addressData).subscribe((response) => {
      this.response = response.msg
      console.log(this.response);
    })
    // stop here if form is invalid
    if (this.addressForm.invalid) {
      return;
    }
    setTimeout(()=> {
      this.router.navigate(['/profile/user'])
    },1000);

  }


  coninuePayment() {
    this.submitted = true;
    if (this.addressForm.invalid) {
      return;
    }
    setTimeout(()=> {

    this.router.navigate(['/payment']); 
    },1000);
  }

}

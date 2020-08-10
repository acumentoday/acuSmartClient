import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  profileStatus : string = "Edit Profile";
  profileForm : FormGroup;
  editSuccess : number;
  submitted =  false; 
  allGrades1 : any = [{'name' : 'Grade 1','id' : 1},{'name' : 'Grade 2','id' : 2},{'name' : 'Grade 3','id' : 3},{'name' : 'Grade 4','id' : 4},{'name' : 'Grade 5','id' : 5},{'name' : 'Grade 6','id' : 6},{'name' : 'Grade 6','id' : 6},{'name' : 'Grade 7','id' : 7},{'name' : 'Grade 8','id' : 8},{'name' : 'Grade 9','id' : 9},{'name' : 'Grade 10','id' : 10},{'name' : 'CBSE','id' : 11},{'name' : 'state Board','id' : 12},]
  allGrades2 : any = [{'name' : 'Grade 1','id' : 1},{'name' : 'Grade 2','id' : 2},{'name' : 'Grade 3','id' : 3},{'name' : 'Grade 4','id' : 4},{'name' : 'Grade 5','id' : 5},{'name' : 'Grade 6','id' : 6},{'name' : 'Grade 6','id' : 6},{'name' : 'Grade 7','id' : 7},{'name' : 'Grade 8','id' : 8},{'name' : 'Grade 9','id' : 9},{'name' : 'Grade 10','id' : 10},{'name' : 'CBSE','id' : 11},{'name' : 'state Board','id' : 12},]

  constructor( private fb :FormBuilder, private router: Router, private authService : AuthService, private profileService: ProfileService) {
    this.profileForm = this.fb.group({
      firstname : ["", Validators.required],
      lastname : ["", Validators.required],
      phonenumber : [""],
      grade_one : ["1", Validators.required],
      grade_two : ["2", Validators.required]
    })
  }
  
  
  
  ngOnInit(): void {
  }


  get profileFormControl() {
    return this.profileForm.controls;
  } 

  applyDetails() {
    var profileData = {
      first_name: this.profileForm.value.firstname,
      last_name : this.profileForm.value.lastname,
      phone : this.profileForm.value.phonenumber,
      grades : [this.profileForm.value.grade_one, this.profileForm.value.grade_two]
    }

    this.profileService.editProfileUserDetails(profileData).subscribe((response : any) => {
        console.log(response);
    })

      this.router.navigate(['/profile/details'])
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }

}

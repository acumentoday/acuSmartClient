import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ProfileRes, ProfileInfo } from './profile-user.model';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  profileResults : ProfileInfo;
  profileAddress : string = 'No address added. Add an address to recieve physical copies of your purchased books (non-free  books only)';
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe((response : ProfileRes) => {
        this.profileResults = response.result;
        if(Object.keys(this.profileAddress).length !== 0)
        this.profileAddress = this.profileResults.address.flat + ' ' + this.profileResults.address.building + ' ' +this.profileResults.address.area + ' ' + this.profileResults.address.city + ' ' +this.profileResults.address.state + ' ' +this.profileResults.address.pinCode ;
        this.profileService.shareAddress(this.profileResults.address,'profileUser');

      })


  }

}

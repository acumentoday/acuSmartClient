import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileDetailsRes, ProfileDetails } from './profile-details/profile-details.model';
import {ProfileInfo,ProfileRes, ProfileAddress} from '../profile/profile-user/profile-user.model';
import { profileBase } from '../_helpers/variables';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private address = new BehaviorSubject<ProfileAddress>({area : '',building : '', city : '', flat : 0, pinCode : 0, state : '' });

   currentAddress = this.address.asObservable();
   private compName = new BehaviorSubject<string>('');
   currentcompName = this.compName.asObservable();
  constructor(private http:HttpClient) { }


  getProfileDetails() {
   return this.http.get<ProfileDetailsRes>(`${profileBase}/user/home`);
  }

  editProfileUserDetails(userDetails : any) {
    console.log(userDetails);
  return this.http.put<any>(`${profileBase}/user/profile`, userDetails)
  }

  getUserProfile() {
    return this.http.get<ProfileRes>(`${profileBase}/user/profile`);
  }


  getBook(id) {
    return this.http.get<any>(`${profileBase}/book/` + id);
  }

  shareAddress(address : ProfileAddress, comp : string) {
    this.address.next(address);
    this.compName.next(comp);
  }

 
 
}

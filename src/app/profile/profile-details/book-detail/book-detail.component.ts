import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details.model';
import { PaymentService } from 'src/app/payment/payment.service';
import { PaymentInitRes } from 'src/app/payment/payment.model';
import { Router } from '@angular/router';
import { ProfileService } from '../../profile.service';
import { ProfileAddress } from '../../profile-user/profile-user.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetailsData : ProfileDetails
  addressRes : ProfileAddress;
  constructor(private paymentService : PaymentService, private router : Router, private profileService : ProfileService) { }

  ngOnInit(): void {
  }


  paymentInit() {
    this.paymentService.initializePayment(this.bookDetailsData.id).subscribe((response : PaymentInitRes) => {
      this.addressRes = response.user.address;
      this.profileService.shareAddress(this.addressRes,'payment');
      this.router.navigate(['/profile/addressEdit']);
    })
  }

}

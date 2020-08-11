import { Component, OnInit, Input } from '@angular/core';
import { ProfileDetails } from '../profile-details.model';
import { PaymentService } from 'src/app/payment/payment.service';
import { PaymentInitRes } from 'src/app/payment/payment.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../profile.service';
import { ProfileAddress } from '../../profile-user/profile-user.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

bookDetailsData : ProfileDetails
id: number;
  addressRes : ProfileAddress;
  constructor(private paymentService : PaymentService, private router : Router, private actRoute : ActivatedRoute, private profileService : ProfileService) { }

  ngOnInit(): void {
this.actRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    this.profileService.getBook(this.id).subscribe((res : any) => {
      this.bookDetailsData = res.book;
      console.log(this.bookDetailsData);
    })
      // In a real app: dispatch action to load the details here.
   });
  }


  paymentInit() {
    this.paymentService.initializePayment(this.bookDetailsData.id).subscribe((response : PaymentInitRes) => {
      this.addressRes = response.user.address;
      this.profileService.shareAddress(this.addressRes,'payment');
      this.router.navigate(['/profile/addressEdit']);
    })
  }

}

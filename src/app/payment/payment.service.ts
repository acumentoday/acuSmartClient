import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paymentBase } from '../_helpers/variables';
import { PaymentInitRes } from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http : HttpClient) { }

    initializePayment(bookId : number) {
      return this.http.get<PaymentInitRes>(`${paymentBase}/init/`+ bookId);
  }


  pay(paymentDetails) {
    
  }

}

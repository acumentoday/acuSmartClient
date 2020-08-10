

import { ProfileDetails } from '../profile/profile-details/profile-details.model';
import { ProfileInfo } from '../profile/profile-user/profile-user.model';

export class PaymentInitRes {
    book: ProfileDetails[];
    code : number;
    requestHash : string;
    txnId : string;
    user : ProfileInfo;
}
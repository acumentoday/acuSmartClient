



export class ProfileRes {
    code : number;
    result : ProfileInfo;
}

export class ProfileInfo {
    address : ProfileAddress;
    created_at: number;
    first_name: string;
    grades: number[];
    id: number;
    last_name: string;
    phone: number;
    username: string;
}


export class ProfileAddress {
    area: string;
    building: string;
    city: string;
    flat: number;
    pinCode: number;
    state: string;
}
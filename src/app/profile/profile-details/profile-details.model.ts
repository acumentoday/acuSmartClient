export class ProfileDetailsRes {
    code: number;
    results: Profile[];
}

export class ProfileDetails {
    description: string;
    grade: number;
    id: number;
    image: string;
    name: string;
    price: number;
    volume: number;
}

export class Profile {
    books: ProfileDetails[];
    headline: string;
}
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProfileService } from '../profile.service';
import {
  ProfileDetailsRes,
  ProfileDetails,
  Profile,
} from './profile-details.model';
import { SearchData, SearchResponse } from 'src/app/header/header.model';
import { HeaderService } from 'src/app/header/header.service';
import { ImageService } from 'src/app/_helpers/image.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private headerService: HeaderService,
    private imageService: ImageService
  ) {}
  response: Profile[];
  searchResults: SearchData[];
  base64Image: any;
  books = [];
  bookDetailsShow : boolean = false;
  bookDetails : ProfileDetails;
  ngOnInit(): void {
    this.profileDetails();
  }

  profileDetails() {
    this.profileService
      .getProfileDetails()
      .subscribe((result: ProfileDetailsRes) => {
        this.response = result.results;
        console.log(result.results);
        for (var i in this.response) {
          for (var j in this.response[i].books) {
            // this.books.push(this.response[i].books[j]);
            // this.getBase64ImageFromUrl(this.response[i].books[j].image)
            // .then(result => console.log(result))
            // .catch(err => console.error(err));
            // this.imageService.getImage(this.response[i].books[j].image).subscribe((data) => {
            //   console.log(data);
            // });
          }


        }
        this.headerService.getClickCall().subscribe((res) => {
          console.log(res);
          if (res.clicked) {
            console.log('called');
            this.headerService.currentSearch.subscribe(
              (res: SearchResponse) => {
                this.searchResults = res.results;
                this.response = this.searchResults;
              }
            );
          } else {
            this.response = result.results;
          }
        });

        console.log(this.response[0].books[0].image);
      });
  }

  showBookDetails(bookDetails: ProfileDetails) {
    this.bookDetailsShow = !this.bookDetailsShow;
    this.bookDetails = bookDetails;
  }

  async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener(
        'load',
        function () {
          resolve(reader.result);
        },
        false
      );

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }
}

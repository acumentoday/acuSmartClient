import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.component';
import { HeaderComponent } from '../header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { BookDetailComponent } from './profile-details/book-detail/book-detail.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';



@NgModule({
  declarations: [ProfileComponent, ProfileDetailsComponent, ProfileViewComponent,HeaderComponent, BookDetailComponent, ProfileUserComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[HeaderComponent]
})
export class ProfileModule { }

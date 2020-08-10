import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { RandomGuard } from '../_guards/random.guards';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'details',
        component: ProfileDetailsComponent,
      },
      {
        path: 'view',
        component: ProfileViewComponent,
      },
      {
        path: 'user',
        component: ProfileUserComponent,
      },
      {
        path: 'edit',
        component: ProfileEditComponent,
      },
      {
        path: 'addressEdit',
        component : ProfileEditComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

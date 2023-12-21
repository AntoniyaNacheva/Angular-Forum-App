import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { Auth } from '../core/guards/auth';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [Auth],
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [Auth],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [Auth],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

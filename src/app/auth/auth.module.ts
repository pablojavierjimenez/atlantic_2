import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [LoginComponent, ChangePasswordComponent, RegisterComponent]
})
export class AuthModule { }

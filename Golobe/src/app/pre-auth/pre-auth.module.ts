import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PreAuthRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PreAuthModule { }

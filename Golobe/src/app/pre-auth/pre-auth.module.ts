import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PreAuthRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class PreAuthModule { }

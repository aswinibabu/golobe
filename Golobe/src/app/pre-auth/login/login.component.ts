import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  passwordHide = true;
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/sign-up.png',
    };
    this.slides[1] = {
      src: './assets/sign-up.png',
    }
    this.slides[2] = {
      src: './assets/sign-up.png',
    }
  }
}

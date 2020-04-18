import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.isLoggedInUser();
  }
  public isLoggedInUser(): void {
    if (window.sessionStorage.getItem('access_token')) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
}

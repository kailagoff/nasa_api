import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor() { }
    //   this.authService.user.subscribe(user => {
    //     if (user == null) {
    //       this.isLoggedIn = false;
    //     } else {
    //       this.isLoggedIn = true;
    //       this.userName = user.displayName;
    //     }
    //   });
    // }
    //
    //   login() {
    //     this.authService.login();
    //   }
    //
    //   logout() {
    //     this.authService.logout();
    //   }
}

import { Component, OnInit } from '@angular/core';
import {LoginService} from '../core/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    logedIn: boolean ;

    constructor(private loginService: LoginService, private router: Router) {
        this.loginService.isLogedIn$
            .subscribe(isLogedIn => {
                console.log(isLogedIn);
                this.logedIn = isLogedIn;
                if (isLogedIn) {
                    this.router.navigate(['dashboard']);
                } else {
                    this.router.navigate(['login']);
                }
            });
    }

    logout() {
        this.loginService.logout();
    }

}

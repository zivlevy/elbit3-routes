import {Component, OnInit} from '@angular/core';
import {LoginService} from "../core/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
    }

    login() {
        this.loginService.login();
    }

}
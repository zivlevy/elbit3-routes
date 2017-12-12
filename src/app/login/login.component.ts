import {Component, OnInit} from '@angular/core';
import {LoginService} from "../core/login.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;

    constructor(private loginService: LoginService, private activatedROute:ActivatedRoute) {
    }

    ngOnInit() {
        console.log(this.activatedROute.snapshot.data)
    }

    login() {
        this.loginService.login();
    }

}

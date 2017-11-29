import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../core/login.service';

@Injectable()
export class LoginGuard implements CanActivate {
    isLogedin: boolean;

    constructor(private loginService: LoginService) {
        this.loginService.isLogedIn$.subscribe(logedIn => this.isLogedin = logedIn);
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.isLogedin;
    }

}

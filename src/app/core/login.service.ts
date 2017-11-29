import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {
    isLogedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {
    }

    login() {
        this.isLogedIn$.next(true);
    }

    logout() {
        this.isLogedIn$.next(false);
    }

}

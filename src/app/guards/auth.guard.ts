import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { AuthService } from '@services/auth.service';
import { NavigationService } from '@services/navigation.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private auth: AuthService,
        private navService: NavigationService
    ) { }

    private checkAuthToken(): Observable<boolean> {
        return this.auth.tokenValidation()
            .pipe(
                catchError(err => {
                    this.navService.loginNavigate();
                    return throwError(err);
                })
            );
    }

    canActivate(): Observable<boolean> {
        return this.checkAuthToken();
    }

    canLoad(): Observable<boolean> {
        return this.checkAuthToken();
    }

}

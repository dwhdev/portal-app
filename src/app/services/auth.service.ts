import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BreadcrumbService } from '@services/breadcrumb.service';

import { ILoginForm } from '@interfaces/login-form.interface';
import { IAPILoginResponse } from '@interfaces/api.interfaces';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private breadService: BreadcrumbService
    ) { }

    /**
     * Indica si el usuario es recordado o no para el inicio de sesión.
     */
    public get isRemember(): boolean {
        return localStorage.getItem('username') ? true : false;
    }

    /**
     * Devuelve el usuario que recordado.
     */
    public get usernameRemember(): string {
        return localStorage.getItem('username') || '';
    }

    /**
     * Almacena en el localStorage el usuario a recordar.
     * @param form El objeto que contiene las credenciales del usuario.
     */
    private saveRemember(form: ILoginForm): void {
        if (form.remember) {
            localStorage.setItem('username', form.username);
        } else {
            localStorage.removeItem('username');
        }
    }

    /**
     * Almacena la fecha en que expira el token devuelve por el servidor.
     * @param expiresIn un entero con la fecha de expiración del token.
     */
    private saveTokenExpires(expiresIn: number): void {
        sessionStorage.setItem('expiresIn', String(expiresIn));
    }

    /**
     * Limbiar el storage de la aplicación.
     */
    public clearStorage(): void {
        this.breadService.clearBreadcrumb();
        sessionStorage.removeItem('expiresIn');
    }

    /**
     * Realiza la autenticación con el Back-End.
     * @param loginForm contiene las credenciales del usuario.
     */
    public login(loginForm: ILoginForm): Observable<IAPILoginResponse> {
        return this.http.post('/auth/login', loginForm)
            .pipe(
                map((res: IAPILoginResponse) => {
                    this.saveTokenExpires(res.expiresIn);
                    this.saveRemember(loginForm);
                    return res;
                }),
                shareReplay(1)
            );
    }

    /**
     * Cierra la sesión de la aplicación.
     */
    public logout(): Observable<void> {
        return this.http.post('/auth/logout', {})
            .pipe(
                map(res => this.clearStorage())
            );
    }

    /**
     * Valida el token de autenticación.
     */
    public tokenValidation(): Observable<boolean> {
        return this.http.get('/auth/check')
            .pipe(
                map((x) => true),
                shareReplay(1)
            );
    }

}

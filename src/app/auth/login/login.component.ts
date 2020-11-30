import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '@services/auth.service';
import { NavigationService } from '@services/navigation.service';

import { IAPIErrorResponse } from '@interfaces/api.interfaces';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('inputUser') inputUser: ElementRef<HTMLInputElement>;
    @ViewChild('inputPass') inputPass: ElementRef<HTMLInputElement>;

    public hide = true;
    public loginForm: FormGroup;
    public loading = false;

    constructor(
        private fb: FormBuilder,
        private toastr: ToastrService,
        private auth: AuthService,
        private navigation: NavigationService
    ) {
        auth.clearStorage();
    }

    ngOnInit(): void {
        document.title = 'Portal DWH | Inicio de Sesión';
        this.loginForm = this.fb.group({
            username: [this.auth.usernameRemember, Validators.required],
            password: ['', Validators.required],
            remember: [this.auth.isRemember]
        });
        if (this.auth.isRemember) {
            setTimeout(() => this.inputPass.nativeElement.select(), 10);
        } else {
            setTimeout(() => this.inputUser.nativeElement.select(), 10);
        }
    }

    public get username(): FormControl {
        return this.loginForm.get('username') as FormControl;
    }

    public get password(): FormControl {
        return this.loginForm.get('password') as FormControl;
    }

    public login(event?: KeyboardEvent): void {
        if (this.loading) {
            return;
        }

        if (event) {
            event.preventDefault();
        }

        this.onLoading();
        setTimeout(() => {
            this.auth.login(this.loginForm.value)
                .subscribe(
                    () => {
                        this.onAfterLoading();
                        return this.navigation.homeNavigate();
                    },
                    (err) => {
                        this.toastr.error(err?.error.message, 'Error al iniciar sesión');
                        setTimeout(() => this.inputPass.nativeElement.select(), 10);
                        this.onAfterLoading();
                    });
        }, 500);
    }

    /**
     * Deshabilita el formulario de inicio de sesión.
     */
    private onLoading(): void {
        this.loading = true;
        this.loginForm.get('username').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('remember').disable();
    }

    /**
     * Habilita el formulario de inicio de sesión.
     */
    private onAfterLoading(): void {
        this.loading = false;
        this.loginForm.get('username').enable();
        this.loginForm.get('password').enable();
        this.loginForm.get('remember').enable();
    }

}

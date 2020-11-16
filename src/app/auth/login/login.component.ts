import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

    constructor(
        private fb: FormBuilder,
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

    public login(): void {
        this.auth.login(this.loginForm.value).subscribe(
            (res) => {
                if (res.ok) {
                    return this.navigation.homeNavigate();
                }
            },
            ({ error }: { error: IAPIErrorResponse; }) => {
                // this.toastr.error(error.message, 'Error al iniciar sesión');
                setTimeout(() => this.inputUser.nativeElement.select(), 10);
            });

    }

}

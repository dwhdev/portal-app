import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


// NgRx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '@app/app.reducer';

// Interceptors de la aplicación
import { httpInterceptorProviders } from '@interceptors/index';

// Componentes principales.
import { environment } from '@environments/environment';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 10,
            logOnly: environment.production
        }),
        ToastrModule.forRoot({
            timeOut: 2000,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: 'toast-bottom-right',
            maxOpened: 6,
            closeButton: true
        })
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }

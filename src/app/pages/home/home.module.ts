import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

// Módulos
import { PipesModule } from '@pipes/pipes.module';


@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        PipesModule
    ]
})
export class HomeModule { }

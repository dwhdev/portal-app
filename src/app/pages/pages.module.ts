import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavModule } from './sidenav/sidenav.module';



@NgModule({
    declarations: [
        PagesComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatSidenavModule,
        SharedModule,
        SidenavModule,
    ]
})
export class PagesModule { }

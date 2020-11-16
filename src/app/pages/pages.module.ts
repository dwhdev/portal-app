import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { SharedModule } from '@shared/shared.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';


@NgModule({
    declarations: [
        PagesComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        SharedModule,
        SidenavModule,
        BreadcrumbModule
    ]
})
export class PagesModule { }

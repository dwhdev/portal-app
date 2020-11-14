import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


import { SidenavComponent } from './sidenav.component';


@NgModule({
    declarations: [
        SidenavComponent
    ],
    exports: [
        SidenavComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatDividerModule
    ]
})
export class SidenavModule { }

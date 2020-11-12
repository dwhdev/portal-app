import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


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
        MatSidenavModule,
        MatListModule
    ]
})
export class SidenavModule { }

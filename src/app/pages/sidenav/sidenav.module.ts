import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';


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
        RouterModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule
    ]
})
export class SidenavModule { }

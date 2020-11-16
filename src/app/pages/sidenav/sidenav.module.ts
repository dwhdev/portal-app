import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

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
        FlexLayoutModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
        MatButtonModule
    ]
})
export class SidenavModule { }

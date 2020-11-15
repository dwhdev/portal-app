import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
    exports: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class BreadcrumbModule { }

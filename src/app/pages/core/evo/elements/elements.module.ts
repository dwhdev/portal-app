import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs/programs.component';
import { TablesComponent } from './tables/tables.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { GraphComponent } from './graph/graph.component';



@NgModule({
    declarations: [
        GraphComponent,
        ProgramsComponent,
        TablesComponent,
    ],
    exports: [
        GraphComponent,
        ProgramsComponent,
        TablesComponent,
    ],
    imports: [
        CommonModule,
        ElementsRoutingModule
    ]
})
export class ElementsModule { }

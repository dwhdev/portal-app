import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProgramsComponent } from './programs/programs.component';
import { TablesComponent } from './tables/tables.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [{
    path: '',
    children: [{
        path: 'graph',
        component: GraphComponent
    }, {
        path: 'program',
        component: ProgramsComponent
    }, {
        path: 'table',
        component: TablesComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElementsRoutingModule { }

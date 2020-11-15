import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './programs/programs.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [{
    path: '', children: [
        { path: 'program', component: ProgramsComponent, data: ['DWHEVO', 'Grafo de Elementos', 'Programas'] },
        { path: 'table', component: TablesComponent, data: ['DWHEVO', 'Grafo de Elementos', 'Programas'] },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElementsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    children: [{
        path: 'elements',
        loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
    }, {
        path: 'executions',
        loadChildren: () => import('./executions/executions.module').then(m => m.ExecutionsModule)
    }, {
        path: 'configurations',
        loadChildren: () => import('./configurations/configurations.module').then(m => m.ConfigurationsModule)
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvoRoutingModule { }

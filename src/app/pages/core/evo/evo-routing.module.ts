import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    children: [
        { path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvoRoutingModule { }

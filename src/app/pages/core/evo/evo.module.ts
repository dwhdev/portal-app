import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoRoutingModule } from './evo-routing.module';
import { ExecutionsModule } from './executions/executions.module';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EvoRoutingModule,
        ExecutionsModule
    ]
})
export class EvoModule { }

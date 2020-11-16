import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillArrayPipe } from './fill-array.pipe';



@NgModule({
    declarations: [
        FillArrayPipe
    ],
    exports: [
        FillArrayPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }

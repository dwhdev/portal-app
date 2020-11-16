import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fillArray'
})
export class FillArrayPipe implements PipeTransform {

    transform(size: number, value: number = 1): number[] {
        return (new Array(size)).fill(value);
    }

}

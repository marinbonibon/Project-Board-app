import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], criterion: string): any[] {
    console.log('criterion', criterion);
    console.log('value', value);
    return criterion
      ? value.filter((card: { name: string }) => card.name.startsWith(criterion))
      : value;
  }
}

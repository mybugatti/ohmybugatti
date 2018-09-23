import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fr'
})
export class FrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyobject'
})
export class KeyobjectPipe implements PipeTransform {

  transform(value: any): any {
    return Object.values(value);
  }
}

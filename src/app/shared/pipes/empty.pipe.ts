import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {
  transform(value: any, args?: string): string {
    if (value) {
      return value;
    }
    return args || 'N/A';
  }
}

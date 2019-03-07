import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe used to display a message if a property doesn't exists in our template
 */
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

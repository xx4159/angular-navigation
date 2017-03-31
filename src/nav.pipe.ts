import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'navPipe'
})
@Injectable()
export class NavPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}

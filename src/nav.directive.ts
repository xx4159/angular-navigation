import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[navDirective]'
})
export class NavDirective {

  constructor(private el: ElementRef) {
  }

}

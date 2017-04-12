import { Component } from '@angular/core';

@Component({
  selector: 'nav-component',
  template: './nav.component.html'
})
export class NavComponent {
	title = 'Title';
	menus = [{
		title: 'menu1',
		link: '/menu1'
	}, {
		title: 'menu2',
		link: '/menu2'
	}];

  constructor() {
  }

}

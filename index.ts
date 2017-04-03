import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './src/nav.component';
import { NavDirective } from './src/nav.directive';
import { NavPipe } from './src/nav.pipe';
import { NavService } from './src/nav.service';

export { NavComponent } from './src/nav.component';
export { NavDirective } from './src/nav.directive';
export { NavPipe } from './src/nav.pipe';
export { NavService } from './src/nav.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavComponent,
    NavDirective,
    NavPipe
  ],
  exports: [
    NavComponent,
    NavDirective,
    NavPipe
  ]
})
export class NavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NavModule,
      providers: [NavService]
    };
  }
}

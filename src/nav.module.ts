import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavDirective } from './nav.directive';
import { NavPipe } from './nav.pipe';
import { NavService } from './nav.service';

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
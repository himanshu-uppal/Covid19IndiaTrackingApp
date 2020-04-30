import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    CovidIndiaDataService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CovidIndiaDataService
  ],
  declarations: []
})
export class CoreModule { } 
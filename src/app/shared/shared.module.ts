import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './third-party/angular-material/angular-material.module';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AngularMaterialModule,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { DefaultComponent } from './default/default.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AuthComponent,
    DefaultComponent,
    TopNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }

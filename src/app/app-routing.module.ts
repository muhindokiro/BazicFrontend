import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { DefaultComponent } from './layout/default/default.component';

const moduleRoutes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthGuard],
    loadChildren: () =>  import('./views/home/home.module').then(m => m.HomeModule)
  }


]

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultComponent,
    children: moduleRoutes
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

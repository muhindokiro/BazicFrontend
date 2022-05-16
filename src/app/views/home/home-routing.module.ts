import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
          {
            path: '',
            component: HomeComponent,
                data: {returnUrl: window.location.pathname}
          },
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    //path: 'adm', loadChildren: () => import('./adm/adm.module').then(m => m.AdmModule) // #angular 8
    path: 'adm', loadChildren: './adm/adm.module#AdmModule' // #Angular 7
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

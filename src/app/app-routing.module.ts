import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pages } from './enums/pages.enum';


const routes: Routes = [
  {
    path: '', redirectTo: Pages.Home, pathMatch: 'full'
  },
  {
    path: Pages.Home, loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

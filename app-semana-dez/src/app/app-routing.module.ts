import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InformarEmailComponent } from './informar-email/informar-email.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'email', component: InformarEmailComponent}


  // {
  //   path: 'home',
  //   loadChildren: () => import('./modules/privado/privado.module').then(m => m.PrivadoModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modules/publico/publico.module').then(m => m.PublicoModule)
  // },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

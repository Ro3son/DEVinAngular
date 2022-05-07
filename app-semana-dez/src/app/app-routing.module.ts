import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { InformarEmailComponent } from './informar-email/informar-email.component';

const routes: Routes = [

  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent},
  // { path: 'email', component: InformarEmailComponent}

  //  Roteamento entre módulos //
  {
    path: 'privado',
    loadChildren: () => import('./modules/privado/privado.module').then(m => m.PrivadoModule)
  },
  {
    path: 'publico',
    loadChildren: () => import('./modules/publico/publico.module').then(m => m.PublicoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

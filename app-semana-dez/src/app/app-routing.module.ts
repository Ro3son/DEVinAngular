import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// import { HomeComponent } from './home/home.component';
// import { InformarEmailComponent } from './informar-email/informar-email.component';
// import { ContentComponent } from './layouts/content/content.component';

const routes: Routes = [
  // Aninhamento de rotas //
  // {
  //   path: 'privado',
  //   component: ContentComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       component: HomeComponent,
  //     },
  //     {
  //       path: 'content',
  //       component: ContentComponent,
  //     },
  //   ]
  // }
  // Roteamento entre módulos //
  {
    path: 'privado',
    loadChildren: () => import('./modules/privado/privado.module').then(m => m.PrivadoModule)
  },
  {
    path: 'publico',
    loadChildren: () => import('./modules/publico/publico.module').then(m => m.PublicoModule)
  },
  { 
    path: '**', component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

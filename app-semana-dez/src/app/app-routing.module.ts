import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { SigninComponent } from './layouts/signin/signin.component';
import { PasswordComponent } from './layouts/password/password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},

  // Declara FullComponent como pai de todas as rotas //
  // { path: '', redirectTo: 'full', pathMatch: 'full'},
  // { path: 'full', component: FullComponent},
  // { path: '', component: ContentComponent,
  // children: [
  //     { path: 'signin', component: SigninComponent},
  //     { path: 'password', component: PasswordComponent},
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

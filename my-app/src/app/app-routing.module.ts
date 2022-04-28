import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { NumberComponent } from './components/number/number.component';
import { FormComponent } from './components/form/form.component';
import { FilmesAPIComponent } from './components/filmes-api/filmes-api.component';

const routes: Routes = [
  {
    path: '', // define the URL path for the route
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'number', component: NumberComponent },
  { path: 'form', component: FormComponent },
  { path: 'filmesAPI', component: FilmesAPIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { ContentComponent } from 'src/app/layouts/content/content.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'content', component: ContentComponent},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivadoRoutingModule { }

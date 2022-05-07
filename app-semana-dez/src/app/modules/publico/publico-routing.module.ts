import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformarEmailComponent } from 'src/app/informar-email/informar-email.component';

const routes: Routes = [
  { path: '', redirectTo: 'email', pathMatch: 'full'},
  { path: 'email', component: InformarEmailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }

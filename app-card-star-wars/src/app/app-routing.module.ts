import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPersonagemComponent } from './components/cadastrar-personagem/cadastrar-personagem.component';
import { EditarPersonagemComponent } from './components/editar-personagem/editar-personagem.component';
import { PersonagemIdComponent } from './components/personagem-id/personagem-id.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';

const routes: Routes = [
  { path: '', redirectTo: 'personagens', pathMatch: 'full' },
  { path: 'personagens', component: StarWarsComponent },
  { path: 'personagens/:id', component: PersonagemIdComponent },
  { path: 'editar', component: EditarPersonagemComponent },
  { path: 'cadastrar', component: CadastrarPersonagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

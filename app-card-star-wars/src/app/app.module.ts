import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import { HttpClientModule } from '@angular/common/http'
import { StarwarsService } from './services/starwars.service';
import { KeyobjectPipe } from './pipes/keyobject.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarPersonagemComponent } from './components/editar-personagem/editar-personagem.component';
import { CadastrarPersonagemComponent } from './components/cadastrar-personagem/cadastrar-personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsComponent,
    KeyobjectPipe,
    EditarPersonagemComponent,
    CadastrarPersonagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StarwarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

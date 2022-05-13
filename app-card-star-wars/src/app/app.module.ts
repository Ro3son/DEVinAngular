import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import { HttpClientModule } from '@angular/common/http'
import { StarwarsService } from './services/starwars.service';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StarwarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

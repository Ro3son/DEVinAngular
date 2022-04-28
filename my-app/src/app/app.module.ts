import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { NumberComponent } from './components/number/number.component';
import { FormComponent } from './components/form/form.component';

import { ServiceTestService } from './services/service-test.service';
import { FilmesAPIComponent } from './components/filmes-api/filmes-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    NumberComponent,
    FormComponent,
    FilmesAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    ServiceTestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({ // Defines a module... //
  declarations: [ // List of components, directives, and pipes... //
    AppComponent, 
    LoginComponent
  ],
  imports: [ // List of modules to import into this module. //
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [], // List of dependency injection providers... //
  bootstrap: [AppComponent]
})
export class AppModule { }
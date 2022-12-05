import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PersonasComponent } from './personas/personas.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

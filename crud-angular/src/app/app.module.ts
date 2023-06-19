import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllSuperHeroesComponent } from './super-heroes/all-super-heroes/all-super-heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSuperHeroesComponent } from './super-heroes/add-super-heroes/add-super-heroes.component';
import { FormsModule } from '@angular/forms';
import { EditSuperHeroesComponent } from './super-heroes/edit-super-heroes/edit-super-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    AllSuperHeroesComponent,
    AddSuperHeroesComponent,
    EditSuperHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

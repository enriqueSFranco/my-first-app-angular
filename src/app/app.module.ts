import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent], // especifica cual es el componente principal y punto de entrada que debe ser cargado al iniciar la app
})
export class AppModule {}

/**
 * El AppModule es un componente esencial en cualquier aplicación Angular,
 * ya que es el módulo raíz que Angular utiliza para arrancar (bootstrapping) la aplicación.
 *
 * Este módulo actúa como el punto de entrada de la aplicación y es crucial para la organización,
 * la configuración y la integración de los diferentes elementos que forman la aplicación.
*/

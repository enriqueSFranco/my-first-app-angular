import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // como se va a referir angular al componente
  standalone: true, // para describir si el componente requiere a NgModule
  imports: [RouterLink, RouterOutlet], // describe las dependencias del componente
  template: `
  <main>
    <header class="brand-name">
      <a [routerLink]="['/']">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </a>
      <a [routerLink]="['/tour-of-heroes']">tour of heroes</a>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`, // diseño del componente
  styleUrl: './app.component.css' // para enumerar los estilos que requiere el componente
})
export class AppComponent {
  title = 'my-first-app';
}

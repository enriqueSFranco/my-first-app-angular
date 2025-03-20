import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // como se va a referir angular al componente
  templateUrl: './app.component.html', // diseño del componente
  styleUrl: './app.component.css' // para enumerar los estilos que requiere el componente
})
export class AppComponent {
  title = 'Tour of heroes';
}

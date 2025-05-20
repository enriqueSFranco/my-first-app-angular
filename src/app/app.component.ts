import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { TaskListComponent } from "./task-list/task-list.component";

// import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // como se va a referir angular al componente
  standalone: true, // para describir si el componente requiere a NgModule
  imports: [SharedModule, TaskListComponent], // describe las dependencias del componente
  templateUrl: `./app.component.html`, // diseño del componente
  styleUrl: './app.component.css', // para enumerar los estilos que requiere el componente
})
export class AppComponent {
  title = 'my-first-app';
}

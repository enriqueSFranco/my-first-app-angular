import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  // comunicacion parent a child
  // el componente padre puede comunicarse con su hijo a traves de propiedades de entrada y salida
  // el padre envia los datos mediante la vinculacion de propiedades de entrada
  mensajeDelPadre = "mensaje desde el padre"

  // comunicacion child a parent
  mensajeRecibido = ""

  reciboMensaje($event: string) {
    this.mensajeRecibido = $event
  }


  counter = 0

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // el componente hijo puede emitir eventos que el componente padre puede escuchar
  // a traves de propieades de salida
  @Input() datoDeEntrada: string = "" // <-- este es el dato que recibi el hijo desde el padre

  // envido data desde el componente child al parent
  @Output() mensajeDesdeHijo = new EventEmitter<string>()
  mensaje = ""

  enviarMensaje() {
    console.log('enviando')
    this.mensajeDesdeHijo.emit(this.mensaje)
  }
}

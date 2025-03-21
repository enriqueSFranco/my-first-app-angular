import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  counter = 0

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }

}

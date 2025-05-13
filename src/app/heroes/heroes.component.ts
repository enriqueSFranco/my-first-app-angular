import { Component } from '@angular/core';
import { Hero } from '../hero';
import { ParentComponent } from "../parent/parent.component";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'spider man'
  }
}

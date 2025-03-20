import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// @Component es una funcion decoradora que especifica metadatos al componente de angular
@Component({
  selector: 'app-heroes', // nombre del componente
  templateUrl: './heroes.component.html', // ubicacion del archivo de plantilla del componente
  styleUrl: './heroes.component.css' // ubicacion del archivo de estos
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getAllHeroes()
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  getAllHeroes() {
    this.heroService.getAllHeroes().subscribe(heroes => this.heroes = heroes)
  }
}

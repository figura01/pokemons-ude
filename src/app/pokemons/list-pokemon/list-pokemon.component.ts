import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pockemons';

import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})

export class ListPokemonComponent {

  private pokemons: Pokemon[] = null;

  constructor(private router: Router) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez cliqué sur ' + pokemon.name);
    const link = ['/pokemon', pokemon.id];

    this.router.navigate(link);
  }
}

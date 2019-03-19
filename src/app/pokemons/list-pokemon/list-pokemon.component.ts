import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
// import { POKEMONS } from '../mock-pokemons';

import { PokemonsService } from '../pokemons.service';

import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
  providers: [PokemonsService]
})

export class ListPokemonComponent {

  private pokemons: Pokemon[] = null;

  constructor(private router: Router, private pokemonsService: PokemonsService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons)
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez cliqué sur ' + pokemon.name);
    const link = ['/pokemon', pokemon.id];

    this.router.navigate(link);
  }
}



import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemons-search.component.html',
  styleUrls: [ './pokemons-search.component.css' ]
})

export class PokemonSearchComponent {

  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();
}
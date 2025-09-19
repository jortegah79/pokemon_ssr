import { Component, input, Input } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pokemon-list',
  imports: [PokemonCardComponent, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  pokemons=input.required<SimplePokemon[]>();
  
}

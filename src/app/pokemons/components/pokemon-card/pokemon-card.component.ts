import { Component, computed, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';

@Component({
  selector: 'pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  pokemon = input.required<SimplePokemon>();

  public readonly pokemonImageUrl = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ this.pokemon().id }.png`;
  });
 
}


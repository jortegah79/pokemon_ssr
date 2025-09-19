import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, filter } from 'rxjs';
import { PokemonsService } from '../../pokemons/services/Pokemons.service';
import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Pokemon } from '../../pokemons/interfaces/Pokemon.interface';

@Component({
  selector: 'app-pokemon-page',
  imports: [TitleCasePipe],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export default class PokemonPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonsService);
 public pokemon=signal<Pokemon|null>(null);
  pokemonImages = computed(() => Object.keys(this.pokemon()!.sprites.other?.['official-artwork']!) as String[]);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter(id => !!id),
      switchMap(id => this.pokemonService.getPokemon(id!))
    ).subscribe(pokemon => {
      this.pokemon.set(pokemon);
      this.title.setTitle(`${this.pokemon()!.id} - ${this.pokemon()!.name.toUpperCase()}`);
      this.meta.updateTag({ name: 'description', content: `Página de información del pokemon ${this.pokemon()!.name}` });
      this.meta.updateTag({ name: 'og:title', content: `${this.pokemon()!.id} - ${this.pokemon()!.name} ` });
      this.meta.updateTag({ name: 'og:description', content: `Página de información del pokemon ${this.pokemon()!.name}` });
      this.meta.updateTag({ name: 'og:image', content: this.pokemon()!.sprites.other?.['official-artwork']!.front_shiny! });
    });

  }
}

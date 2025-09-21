import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "../../pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/Pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { map, tap } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent,RouterLink],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css'
})
export default class PokemonsPageComponent {
  
  private router = inject(Router);
  private title = inject(Title);
  private pokemonsService = inject(PokemonsService);
  private activatedRoute  = inject(ActivatedRoute); 
  
  public isLoading = signal(false);
  public  pokemons        = signal<SimplePokemon[]>([]);
  // public  currentPage     = toSignal<number>(this.activatedRoute.queryParamMap  
  //   .pipe(
  //     map(params=>params.get('page')??'1'),
  //     map(page=>( isNaN(+page) ? 1 : +page)), 
  //     map(page=>Math.max(1,page))
     
  //   ));  
  public currentPage=toSignal(this.activatedRoute.paramMap.pipe(
    map(params=>params.get('id')??'1'),   
    map(id=>( isNaN(+id) ? 1 : +id)), 
    map(id=>Math.max(1,id))
  ));
 
  public loadPokemons(page:number = 0) {
           
    this.isLoading.set(true);    
    this.pokemonsService.loadPage( page  )
    .pipe(     
      tap(()=> this.title.setTitle(`Pokemons SSR - Page ${ page}`))
    )
    .subscribe((pokemons) => {
      this.pokemons.set(pokemons);
      this.isLoading.set(false);
    });
  }

  createProjectEffect=effect(()=>{   
    this.loadPokemons(this.currentPage()!);  
  })
  
}

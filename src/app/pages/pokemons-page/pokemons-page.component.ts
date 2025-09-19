import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "../../pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/Pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon.interface';
import { ActivatedRoute, Router } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { map, tap } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css'
})
export default class PokemonsPageComponent {
  
  private router = inject(Router);
  private title = inject(Title);
  public isLoading = signal(false);
  
  private pokemonsService = inject(PokemonsService);
  public  pokemons        = signal<SimplePokemon[]>([]);
  private activatedRoute  = inject(ActivatedRoute); 
  public  currentPage     = toSignal<number>(this.activatedRoute.queryParamMap  
    .pipe(
      map(params=>params.get('page')??'1'),
      map(page=>( isNaN(+page) ? 1 : +page)), 
      map(page=>Math.max(1,page))
     
    ));  
 
  public loadPokemons(page: number=0) {
    this.isLoading.set(true);
    const pageToLoad=this.currentPage()! + page;    
   
    this.pokemonsService.loadPage(pageToLoad  )
    .pipe(
      tap(()=> this.router.navigate(['/pokemons'], { queryParams: { page:pageToLoad } })), 
      tap(()=> this.title.setTitle(`Pokemons SSR - Page ${pageToLoad}`))
    )
    .subscribe((pokemons) => {
      this.pokemons.set(pokemons);
      this.isLoading.set(false);
    });
  }

  ngOnInit(): void { 
      
  this.loadPokemons(0);  

  }


}

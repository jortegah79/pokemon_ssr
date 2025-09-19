import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { SimplePokemon } from '../interfaces/simple-pokemon.interface';
import { PokeApiResponse } from '../interfaces/PokeApiResponse.interface';
import { Pokemon } from '../interfaces/Pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private http = inject(HttpClient);
  constructor() { }

  public loadPage(page: number): Observable<SimplePokemon[]> {
  console.log("page",page);

    if (page !== 0) {
      page--;
    }
    page = Math.max(0, page);

    return this.http.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`)
      .pipe(
        map(resp=>{
          const SimplePokemon:SimplePokemon[]=resp.results.map(pokemon=>{
            const urlParts=pokemon.url.split('/');
            const id=urlParts[urlParts.length-2];
            return {
              name:pokemon.name,
              id:id
            }
          });
          return SimplePokemon;

        }),
        tap((resp:SimplePokemon[])=>{
          console.log(resp);
        })

      )
  }


  public getPokemon(id:string): Observable<Pokemon> {    

    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}

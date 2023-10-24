import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Results } from '../interfaces/pokeApi';
import { Observable, throwError } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { Description,FlavorTextEntry } from '../interfaces/description';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemons(page:number,limit: number = 40): Observable<Response>{
    const offset = limit * (page - 1);
    return this.http.get<Response>(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}/`)
  }
  getById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  getDescriptionById(id: number | string): Observable<Description> {
     return this.http.get<Description>(`https://pokeapi.co/api/v2/pokemon-species/${id}`,)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonInterface } from './pokemon.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  urlGetAll = "http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll";

  urlGetById = "http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=";

  urlAdd = "http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=";

  getPokemon(): Observable<PokemonInterface[]>{
    return this.http.get<PokemonInterface[]>(this.urlGetAll);
  }

  getPokemonById(id: number): Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>(this.urlGetById + id);
  }

  addPokemon(pokemon: PokemonInterface, user: string): Observable<PokemonInterface>{
    return this.http.post<PokemonInterface>(this.urlAdd + user, pokemon);
  }

}

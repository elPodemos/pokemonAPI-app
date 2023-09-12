import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonInterface } from './pokemon.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  urlGetAll = "http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll";

  urlGetById = "http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=";

  urlAdd = "http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Elias";

  urlDelete = "http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=deletePokemon&userApi=Elias&id=";

  getPokemon(): Observable<PokemonInterface[]>{
    return this.http.get<PokemonInterface[]>(this.urlGetAll);
  }

  getPokemonById(id: number): Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>(this.urlGetById + id);
  }

  addPokemon(pokemon: PokemonInterface): Observable<PokemonInterface>{
    const headers = { 'content-type': 'application/x-www-form-urlencoded'}  
    const body=JSON.stringify(pokemon); 
    return this.http.post<PokemonInterface>(this.urlAdd, body,{'headers':headers});
  }

  deletePokemon(id:string): Observable<PokemonInterface>{
    console.log(id);
    return this.http.get<PokemonInterface>(this.urlDelete+id);
  }

}

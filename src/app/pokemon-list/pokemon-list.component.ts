import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonInterface } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private service:PokemonService
    ){}

  pokemonList: PokemonInterface[] | undefined;

  ngOnInit(): void {

    this.service.getPokemon().subscribe(data => {
      this.pokemonList = data;
      console.table(this.pokemonList);
    });

  }

}

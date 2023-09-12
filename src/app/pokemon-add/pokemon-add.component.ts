import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { PokemonService } from '../pokemon.service';
import { PokemonInterface } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css']
})
export class PokemonAddComponent implements OnInit {

  constructor(
    private service:PokemonService,
  ){}

  pokemon: PokemonInterface | undefined;

  pokemonList: PokemonInterface[] | undefined;

  ngOnInit(): void {

    this.service.getPokemon().subscribe(data => {
      this.pokemonList = data;
      console.table(this.pokemonList);
    });

  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.service.addPokemon(form.value).subscribe(data => {
      console.log(data);
      this.pokemonList?.push(data);
    });
  }

}

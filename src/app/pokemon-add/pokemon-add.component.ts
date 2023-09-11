import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css']
})
export class PokemonAddComponent {

  constructor(
    private service:PokemonService,
  ){}

  onSubmit(form: NgForm){
    return this.service.addPokemon(form.value,"Elias");
  }

}

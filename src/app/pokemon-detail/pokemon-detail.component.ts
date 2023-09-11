import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonInterface } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service:PokemonService,
    ) {}

    pokemon: PokemonInterface | undefined;
    id: number = Number(this.route.snapshot.paramMap.get('id'));

    ngOnInit(): void {

      this.service.getPokemonById(this.id).subscribe(data => {
        this.pokemon = data;
      });
  
    }
}

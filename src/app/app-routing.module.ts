import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemon', component: PokemonListComponent},
  {path: 'pokemon/add', component: PokemonAddComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

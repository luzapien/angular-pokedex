import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Results } from 'src/app/interfaces/pokeApi';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnChanges {
  ngOnChanges(): void {
   this.getPokemonNumber()
  }
  constructor(private pokemonService: PokemonService) {
   }
  
  @Input() data?: Results;
  @Output() clicked = new EventEmitter;
  pokemonId: string = "0";
  pokemonImg: string = "";

  getPokemonNumber() {
    if (this.data) {
      this.pokemonId = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemonService.getById(this.pokemonId).subscribe({
        next: (resp) => {
        }
      })
    }
  }
  // getPokemonImage() {

  // }

}

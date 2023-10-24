import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { Description } from 'src/app/interfaces/description';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-img-pokemon',
  templateUrl: './img-pokemon.component.html',
  styleUrls: ['./img-pokemon.component.css'],
})
export class ImgPokemonComponent implements OnChanges{
  constructor(private pokemonService: PokemonService) { }

  @Input() pokemon?: Pokemon;

  description: string | undefined = "";
  
  ngOnChanges() {
    if (this.pokemon) {
      this.pokemonService.getDescriptionById(this.pokemon?.id).subscribe({
        next: (resp: Description) => {
          console.log(resp)
          const flavor_text = resp.flavor_text_entries;
          const text = flavor_text.find((flavor_text) => flavor_text.language.name === 'en')
          this.description = text?.flavor_text;
          // console.log(this.description)
        }
      })
    }

  }
}

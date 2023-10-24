import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Response, Results } from 'src/app/interfaces/pokeApi';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private PokemonService: PokemonService) {}
  ngOnInit(): void {
    this.getListOfPokemons();
  }
  @ViewChild('tarjetas')
  tarjetasElement!: ElementRef;
  pokemonsList: Results[] = [];
  pokemonSelected?: Pokemon;
  page: number = 1;
  loading: boolean = false;

  //Main operators
  //Pipe--> dentro de pipe metes los operadores como parámetros - operador map o tap
  //investigar como usar operador take y first para cerrar la subcripción una vez obteniendo la data.

  getListOfPokemons() {
    this.PokemonService.getPokemons(this.page).subscribe({
      next: (resp) => {
        this.pokemonsList = [...this.pokemonsList, ...resp.results];
      },
    });
    this.page++;
  }

  onScroll(e: any) {
    this.loading = true;
    if (
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight +
          this.tarjetasElement.nativeElement.scrollTop
      ) === e.srcElement.scrollHeight
    )
      this.getListOfPokemons();
    this.loading = false;
  }

  clickedCard(id: string) {
    this.PokemonService.getById(id).subscribe({
      next: (resp: Pokemon) => {
        this.pokemonSelected = resp;
      },
    });
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPokemonComponent } from './img-pokemon.component';

describe('ImgPokemonComponent', () => {
  let component: ImgPokemonComponent;
  let fixture: ComponentFixture<ImgPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgPokemonComponent]
    });
    fixture = TestBed.createComponent(ImgPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

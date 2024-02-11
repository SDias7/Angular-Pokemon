import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsSearchComponent } from './pokemons-search.component';

describe('PokemonsSearchComponent', () => {
  let component: PokemonsSearchComponent;
  let fixture: ComponentFixture<PokemonsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsSearchComponent]
    });
    fixture = TestBed.createComponent(PokemonsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

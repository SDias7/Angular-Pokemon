import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Base/app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsSearchComponent } from './pokemons-search/pokemons-search.component';
import { PokemonsDetailComponent } from './pokemons-detail/pokemons-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonsSearchComponent,
    PokemonsDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

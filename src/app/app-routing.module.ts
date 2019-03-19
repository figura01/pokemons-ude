import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';

// routes
const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: '**', component: PageNoFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

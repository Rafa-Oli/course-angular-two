import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [RestaurantsService],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('visible <=> hidden', animate('360ms os ease-in-out'))
    ])
  ]
})
export class RestaurantesComponent implements OnInit {
  searchBarState = 'hidden'

  restaurants: Restaurant[]

  searchForm: FormGroup

  constructor(private restaurantsService: RestaurantsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    })
    this.searchForm.get('search').valueChanges
      .debounceTime(500) //vai mandar result depois de 500ms
      .distinctUntilChanged() //vai verificar se é igual ao ultimo result
      .switchMap((value) => this.restaurantsService.restaurants(value)
        .catch(error => Observable.from([]))) // se der erro na requisição, vai retorna um vazio, para não quebrar
      .subscribe(restaurants => this.restaurants = restaurants)

    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

  public toggleSearch(): void {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}

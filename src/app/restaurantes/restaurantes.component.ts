import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers:[RestaurantsService],
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

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

  public toggleSearch(): void{
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}

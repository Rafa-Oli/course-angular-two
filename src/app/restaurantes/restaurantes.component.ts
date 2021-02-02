import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers:[RestaurantsService]
})
export class RestaurantesComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.restaurantsService.restaurants()
  }

}

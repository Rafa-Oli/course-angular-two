import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant';
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]>{
     return this.http.get(`${MEAT_API}/restaurants`)
     .map(response => response.json())
  }

}

import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { MEAT_API } from '../app.api'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from 'app/app.error-handler';
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  public restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().set('q', search) //passando um parametro para a url
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`,{params:  params})
  
  }
  public restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  public reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  public menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }

}

import {Routes} from '@angular/router'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { RestaurantDetailComponent } from './restaurantes/restaurant-detail/restaurant-detail.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'


export const ROUTES: Routes =[
    {path: '', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'restaurants', component: RestaurantesComponent},
    {path:'restaurants/:id', component: RestaurantDetailComponent},
]
import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { OrderSumaryComponent } from './order-sumary/order-sumary.component'
import { MenuComponent } from './restaurantes/restaurant-detail/menu/menu.component'
import { RestaurantDetailComponent } from './restaurantes/restaurant-detail/restaurant-detail.component'
import { ReviewsComponent } from './restaurantes/restaurant-detail/reviews/reviews.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'


export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'restaurants', component: RestaurantesComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    {path: 'order-sumary', component: OrderSumaryComponent},
    {path: 'order', loadChildren: './order/order.module#OrderModule'}
]
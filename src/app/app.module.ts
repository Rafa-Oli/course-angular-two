import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from './app.routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurantes/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurantes/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurantes/restaurant-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurantes/restaurant-detail/reviews/reviews.component';
import { MenuItemComponent } from './restaurantes/restaurant-detail/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ShoppingCartComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

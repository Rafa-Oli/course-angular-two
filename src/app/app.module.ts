import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurantes/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurantes/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurantes/restaurant-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurantes/restaurant-detail/reviews/reviews.component';
import { MenuItemComponent } from './restaurantes/restaurant-detail/menu-item/menu-item.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ShoppingCartComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SharedModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

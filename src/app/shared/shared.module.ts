import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurantes/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurantes/restaurants.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RatingComponent, InputComponent, RadioComponent, SnackbarComponent],
  exports: [InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders{
    return{
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantsService, OrderService]
    }
  }
 }

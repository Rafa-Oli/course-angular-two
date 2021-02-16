import { NgModule } from '@angular/core';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderComponent } from './order.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: OrderComponent }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [DeliveryCostsComponent, OrderComponent, OrderItensComponent]
})
export class OrderModule { }

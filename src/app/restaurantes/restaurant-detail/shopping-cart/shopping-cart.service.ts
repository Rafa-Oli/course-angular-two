import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

@Injectable()
export class ShoppingCartService {
    itens: CartItem[] = []

    constructor(private notificationService: NotificationService){}

    public clear(): void {
        this.itens = []
    }

    public addItem(item: MenuItem): void {
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
           this.increaseQty(foundItem)
        } else {
            this.itens.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    public increaseQty(item: CartItem): void{
        item.quantity = item.quantity + 1
    }

    public decreaseQty(item: CartItem): void{
        item.quantity =  item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }
    public removeItem(item: CartItem): void {
        this.itens.splice(this.itens.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number {
        return this.itens.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }
}
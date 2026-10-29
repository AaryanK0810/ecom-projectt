import { Component , inject } from '@angular/core';
import { CartService } from '../cart-service';
import { CurrencyPipe } from '@angular/common';
@Component({
  standalone : true,
  imports: [CurrencyPipe],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  private cartService = inject(CartService);

  items = this.cartService.items;
  totalItems = this.cartService.totalItems;
  totalPrice = this.cartService.totalPrice;

  updateQuantity(productId : number , quantity : number) : void {
    this.cartService.updateQuantity(productId , quantity)
  }

  removeItem(productId : number) : void
  {
    this.cartService.removeFromCart(productId);
    }

  clearCart() : void 
  {
    this.cartService.clearCart()
  }
}

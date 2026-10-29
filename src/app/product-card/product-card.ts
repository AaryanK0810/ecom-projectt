import { Component , input , inject } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart-service';
@Component({
  standalone : true,
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>()

  private cartService = inject(CartService);

  addToCart() : void {
    this.cartService.addToCart(this.product())
  }
}

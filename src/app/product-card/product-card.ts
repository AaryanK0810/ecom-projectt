import { Component , input } from '@angular/core';
import { Product } from '../product';

@Component({
  standalone : true,
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>()
}

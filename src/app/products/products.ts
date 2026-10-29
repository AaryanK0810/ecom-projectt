import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- 1. Import this
import { ProductService } from '../product-service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // <-- 2. Add it here
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    console.log('Products component initialized');

    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log('API response:', response);
        this.products.set(response.products);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('API request failed:', error);
        this.error.set('Failed to load products. Please try again.');
        this.loading.set(false);
      }
    });
  }
}

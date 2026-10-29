
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../product';
import { Search } from '../search/search';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [Search , ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  loading = signal(true);
  error = signal('');
  searchText = signal('');

  filteredProducts = computed(() => {
    const search = this.searchText().trim().toLowerCase();

    return this.products().filter(product =>
      product.title.toLowerCase().includes(search)
    );
  });

  onSearchChanged(value: string): void {
    this.searchText.set(value);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products.set(response.products);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load products. Please try again.');
        this.loading.set(false);
      }
    });
  }
}

import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './cart-service';
@Component({
  imports: [RouterOutlet , RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ecom-project');

  private cartService = inject(CartService);
  totalItems = this.cartService.totalItems;
}

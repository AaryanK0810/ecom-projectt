
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchText = signal('');

  searchChanged = output<string>();

  onSearch(value: string): void {
    this.searchText.set(value);
    this.searchChanged.emit(value);
  }
}

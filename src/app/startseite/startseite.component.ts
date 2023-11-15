import { Component } from '@angular/core';

// Schritt 1: Produktklasse definieren
class Product {
  constructor(
    public name: string,
    public price: number,
    public imageUrl: string
  ) {}
}

@Component({
  selector: 'pm-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.scss']
})
export class StartseiteComponent {
  // Schritt 2: Produkte zur Komponente hinzufügen
  products: Product[] = [
    new Product('Produkt 1', 19.99, 'assets/images/produkt1.jpg'),
    new Product('Produkt 2', 29.99, 'assets/images/produkt2.jpg'),
  ];
}

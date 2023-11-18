import { Component } from '@angular/core';

class Product {
  constructor(
    public name: string,
    public price: number,
    public imageUrl: string
  ) {}
}

@Component({
  selector: 'pm-kategorieliste',
  templateUrl: './kategorieliste.component.html',
  styleUrls: ['./kategorieliste.component.scss']
})
export class KategorielisteComponent {
  smartphones: Product[] = [
    new Product('Smartphone 1', 299.99, 'assets/images/Smartphone1.jpg'),
    new Product('Smartphone 2', 599.99, 'assets/images/Smartphone2.jpg'),
    new Product('Smartphone 3', 999.99, 'assets/images/Smartphone3.jpg')
  ];

  laptops: Product[] = [
    new Product('Laptop 1', 332.99, 'assets/images/Laptop1.jpg'),
    new Product('Laptop 2', 665.99, 'assets/images/Laptop2.jpg'),
    new Product('Laptop 3', 998.99, 'assets/images/Laptop3.jpg')
  ];

  computers: Product[] = [
    new Product('Computer 1', 999.99, 'assets/images/Computer1.jpg'),
    new Product('Computer 2', 1234.99, 'assets/images/Computer2.jpg'),
    new Product('Computer 3', 4321.99, 'assets/images/Computer3.jpg')
  ];

  // Zustandsvariablen für die Anzeige der Dropdowns
  showSmartphones: boolean = false;
  showLaptops: boolean = false;
  showComputers: boolean = false;

  toggleDropdown(category: string) {
    switch (category) {
      case 'smartphones':
        this.showSmartphones = !this.showSmartphones;
        break;
      case 'laptops':
        this.showLaptops = !this.showLaptops;
        break;
      case 'computers':
        this.showComputers = !this.showComputers;
        break;
    }
  }
}

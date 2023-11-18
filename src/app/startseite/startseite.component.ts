import { Component } from '@angular/core';

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
  smartphones: Product[] = [
    new Product('Smartphone 3', 999.99, 'assets/images/Smartphone3.jpg')
  ];
  laptops: Product[] = [
    new Product('Laptop 2', 665.99, 'assets/images/Laptop2.jpg'),
  ];
  computers: Product[] = [
    new Product('Computer 1', 999.99, 'assets/images/Computer1.jpg'),
  ];
}

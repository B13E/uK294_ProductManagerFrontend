import { Component } from '@angular/core';
import { HeaderComponent } from './elements/header/header.component'; // Update the path as necessary
import { FooterComponent } from './elements/footer/footer.component'; // Update the path as necessary
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product-manager-frontend';
}

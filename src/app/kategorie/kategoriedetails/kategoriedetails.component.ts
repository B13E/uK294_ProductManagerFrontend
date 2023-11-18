import { Component } from '@angular/core';

@Component({
  selector: 'pm-kategoriedetails',
  templateUrl: './kategoriedetails.component.html',
  styleUrls: ['./kategoriedetails.component.scss']
})

export class KategoriedetailsComponent {
  kategorieText: string = '';

  bearbeiteBeschreibung(): void {
  }

  loescheBeschreibung(): void {
    this.kategorieText = '';
  }
}

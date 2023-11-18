import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'pm-footer',
  standalone: true,
    imports: [CommonModule, MatToolbarModule, RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  protected readonly onpageshow = onpageshow;
}

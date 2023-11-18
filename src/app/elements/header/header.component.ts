import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'pm-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected readonly onpageshow = onpageshow;
  private router: any;

  // Diese Methode überprüft, ob der Benutzer angemeldet ist, indem sie das ACCESS_TOKEN im lokalen Speicher überprüft.
  isLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  // Diese Methode führt die Abmeldung durch, indem das ACCESS_TOKEN aus dem lokalen Speicher entfernt wird,
  // und der Benutzer zur Login-Seite umgeleitet wird.
  logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigateByUrl('/auth/login');
  }
}

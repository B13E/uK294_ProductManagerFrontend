import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { User } from "../../models/user";

/**
 * Komponente zur Anzeige von Benutzerprofilen.
 */
@Component({
  selector: 'pm-benutzer',
  templateUrl: './benutzer.component.html',
  styleUrls: ['./benutzer.component.scss']
})
export class BenutzerComponent implements OnInit {
  // User-Objekt für die Anzeige im Template
  user: User;

  ngOnInit(): void {
  }
}

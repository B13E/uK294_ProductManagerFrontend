import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Mock-Klasse für Authentifizierungsservice. In der realen Anwendung sollte dies
// durch einen richtigen Authentifizierungsservice ersetzt werden.
class AuthService {
  // Überprüft, ob der aktuelle Benutzer Administratorrechte hat.
  isAdmin() {
    // Hier sollte die tatsächliche Logik zur Überprüfung der Admin-Rechte implementiert werden.
    return true;
  }
}

// Injectable Dekorator, der Angular mitteilt, dass dieser Dienst in der gesamten Anwendung zur Verfügung steht.
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  // Konstruktor, der den AuthService und den Router injiziert.
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate Methode, die bestimmt, ob eine Route aktiviert werden kann.
  canActivate(
      route: ActivatedRouteSnapshot, // Aktuelle Route-Information
      state: RouterStateSnapshot // Zustand der Router zum Zeitpunkt der Methode
  ): boolean {
    // Überprüft, ob der Benutzer Admin-Rechte hat.
    if (this.authService.isAdmin()) {
      // Erlaubt den Zugriff auf die Route, wenn der Benutzer ein Admin ist.
      return true;
    } else {
      // Leitet den Benutzer zur Login-Seite um, wenn er keine Admin-Rechte hat.
      this.router.navigate(['/login']);
      return false;
    }
  }
}

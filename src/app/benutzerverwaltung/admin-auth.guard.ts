import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Importieren Sie Ihren AuthGuard

class AuthService {
  isAdmin() {
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAdmin()) {
      return true; // Erlauben Sie den Zugriff für Administratoren
    } else {
      // Redirect oder andere Maßnahmen für nicht autorisierte Benutzer
      this.router.navigate(['/login']); // Sie können dies anpassen
      return false;
    }
  }
}

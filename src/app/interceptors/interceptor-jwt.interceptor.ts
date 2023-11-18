import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Überprüfen, ob ein Zugriffstoken im lokalen Speicher vorhanden ist
    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    if (accessToken) {
      // Zugriffstoken zum Authorization-Header hinzufügen
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return next.handle(clonedRequest);
    }

    // Wenn kein Zugriffstoken vorhanden ist, die Anfrage unverändert weiterleiten
    return next.handle(request);
  }
}
export class InterceptorJwtInterceptor {
}

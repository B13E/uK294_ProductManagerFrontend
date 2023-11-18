import { TestBed } from '@angular/core/testing';
import { InterceptorJwtInterceptor } from './interceptor-jwt.interceptor';

// Unit-Tests für InterceptorJwtInterceptor
describe('InterceptorJwtInterceptor', () => {
  // Test-Vorbereitung: Registrierung des Interceptors im TestModule
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorJwtInterceptor // Registriert InterceptorJwtInterceptor als Provider
    ]
  }));

  // Testfall: Überprüft die Erzeugung des Interceptors
  it('should be created', () => {
    // Erzeugt eine Instanz des Interceptors
    const interceptor: InterceptorJwtInterceptor = TestBed.inject(InterceptorJwtInterceptor);
    // Überprüft, ob die Instanz erfolgreich erzeugt wurde
    expect(interceptor).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

// Test-Suite für LoginComponent
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // Wird vor jedem Testfall ausgeführt, um die Testumgebung einzurichten
  beforeEach(() => {
    // Konfiguriert das Testmodul mit dem LoginComponent
    TestBed.configureTestingModule({
      declarations: [LoginComponent] // Deklariert das zu testende LoginComponent
    });
    // Erstellt eine Testinstanz von LoginComponent
    fixture = TestBed.createComponent(LoginComponent);
    // Holt die Instanz des Komponenten-Controllers
    component = fixture.componentInstance;
    // Führt Change Detection aus, um die initialen Datenbindungen zu starten
    fixture.detectChanges();
  });

  // Testfall, um sicherzustellen, dass die Komponente korrekt erstellt wird
  it('should create', () => {
    expect(component).toBeTruthy(); // Überprüft, ob die Komponenteninstanz existiert
  });
});

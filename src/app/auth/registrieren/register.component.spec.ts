import "~@angular/material/prebuilt-themes/indigo-pink.css";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';

// Test-Suite für RegisterComponent
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  // Wird vor jedem Testfall ausgeführt, um die Testumgebung einzurichten
  beforeEach(() => {
    // Konfiguriert das Testmodul mit dem zu testenden RegisterComponent
    TestBed.configureTestingModule({
      declarations: [RegisterComponent] // Deklariert das RegisterComponent für das Testing-Modul
    });
    // Erstellt eine Testinstanz von RegisterComponent
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance; // Holt die Instanz des Komponenten-Controllers
    fixture.detectChanges(); // Führt Change Detection aus, um die initialen Datenbindungen zu starten
  });

  // Testfall, um sicherzustellen, dass die Komponente korrekt erstellt wird
  it('should create', () => {
    expect(component).toBeTruthy(); // Überprüft, ob die Komponenteninstanz existiert
  });
});

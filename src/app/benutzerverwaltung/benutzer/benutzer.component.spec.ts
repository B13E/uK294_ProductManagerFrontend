import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenutzerComponent } from './benutzer.component';

// Diese Testklasse beschreibt die Tests für BenutzerComponent
describe('BenutzerComponent', () => {
  // Deklaration von Variablen für die Komponente und das Fixture (Testumgebung)
  let component: BenutzerComponent;
  let fixture: ComponentFixture<BenutzerComponent>;

  // before each Test wird die Testumgebung für BenutzerComponent initialisiert
  beforeEach(async () => {
    // TestBed konfiguriert ein Modul, das die BenutzerComponent deklariert
    await TestBed.configureTestingModule({
      declarations: [ BenutzerComponent ]
    }).compileComponents(); // Kompiliert die Vorlagen und CSS
  });

  // before each Test wird eine Instanz von BenutzerComponent erstellt
  beforeEach(() => {
    // Erzeugt ein Fixture für BenutzerComponent
    fixture = TestBed.createComponent(BenutzerComponent);
    // Erzeugt eine Instanz der Komponente
    component = fixture.componentInstance;
    // Führt Change Detection aus, um Datenbindungen zu aktualisieren
    fixture.detectChanges();
  });

  // Test, ob die Komponente erfolgreich erstellt wird
  it('should create', () => {
    // Erwartet, dass die Komponente richtig initialisiert wird
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  // Konfigurieren und Vorbereiten der Testumgebung vor jedem Testfall
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent], // Deklariere die zu testende Komponente
    });
    fixture = TestBed.createComponent(HeaderComponent); // Erstelle eine Komponenteninstanz
    component = fixture.componentInstance; // Greife auf die Komponenteninstanz zu
    fixture.detectChanges(); // Aktualisiere die Komponentenansicht
  });

  // Überprüfe, ob die Komponente erfolgreich erstellt wurde
  it('should create', () => {
    expect(component).toBeTruthy(); // Die Komponente sollte erfolgreich erstellt worden sein
  });
});

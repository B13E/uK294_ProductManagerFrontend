import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatenschutzComponent } from './datenschutz.component';

// Unit-Tests für DatenschutzComponent
describe('DatenschutzComponent', () => {
  let component: DatenschutzComponent;
  let fixture: ComponentFixture<DatenschutzComponent>;

  // Initialisierung der Testumgebung vor jedem Test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatenschutzComponent] // Deklaration der zu testenden Komponente
    });
    fixture = TestBed.createComponent(DatenschutzComponent); // Erstellung einer Instanz der Komponente
    component = fixture.componentInstance; // Referenz auf die Komponenteninstanz
    fixture.detectChanges(); // Auslösen der ersten Change Detection
  });

  // Test, um sicherzustellen, dass die Komponente korrekt erstellt wird
  it('should create', () => {
    expect(component).toBeTruthy(); // Überprüfung, ob die Komponente existiert
  });
});

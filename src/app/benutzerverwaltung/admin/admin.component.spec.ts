import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
// @ts-ignore
import { UserService } from '../../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Test Suite für AdminComponent
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  // Initialisierung der Testumgebung für AdminComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [ HttpClientTestingModule ], // Import des HttpClientTestingModule für HTTP-Requests im Test
      providers: [ UserService ] // Bereitstellung des UserService für die Komponente
    })
        .compileComponents(); // Kompilierung der Komponente und ihrer Vorlagen
  });

  // Erzeugung einer Instanz von AdminComponent vor jedem Test
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Anstoßen der Erkennung von Datenänderungen
  });

  // Testfall zur Überprüfung der erfolgreichen Erstellung der Komponente
  it('should create', () => {
    expect(component).toBeTruthy(); // Sollte true sein, wenn die Komponente erfolgreich erstellt wurde
  });
});

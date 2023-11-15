import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduktEntfernenComponent } from './produkt-entfernen.component';

describe('ProduktEntfernenComponent', () => {
  let component: ProduktEntfernenComponent;
  let fixture: ComponentFixture<ProduktEntfernenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduktEntfernenComponent]
    });
    fixture = TestBed.createComponent(ProduktEntfernenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

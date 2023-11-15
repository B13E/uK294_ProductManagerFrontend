import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduktErstellenComponent } from './produkt-erstellen.component';

describe('ProduktErstellenComponent', () => {
  let component: ProduktErstellenComponent;
  let fixture: ComponentFixture<ProduktErstellenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduktErstellenComponent]
    });
    fixture = TestBed.createComponent(ProduktErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

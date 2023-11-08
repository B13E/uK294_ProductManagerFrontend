import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktBearbeitenComponent } from './produkt-bearbeiten.component';

describe('ProduktBearbeitenComponent', () => {
  let component: ProduktBearbeitenComponent;
  let fixture: ComponentFixture<ProduktBearbeitenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduktBearbeitenComponent]
    });
    fixture = TestBed.createComponent(ProduktBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

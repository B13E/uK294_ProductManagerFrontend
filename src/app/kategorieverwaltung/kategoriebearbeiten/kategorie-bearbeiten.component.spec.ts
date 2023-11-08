import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieBearbeitenComponent } from './kategorie-bearbeiten.component';

describe('KategorieBearbeitenComponent', () => {
  let component: KategorieBearbeitenComponent;
  let fixture: ComponentFixture<KategorieBearbeitenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategorieBearbeitenComponent]
    });
    fixture = TestBed.createComponent(KategorieBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

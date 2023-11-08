import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieEntfernenComponent } from './kategorie-entfernen.component';

describe('KategorieEntfernenComponent', () => {
  let component: KategorieEntfernenComponent;
  let fixture: ComponentFixture<KategorieEntfernenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategorieEntfernenComponent]
    });
    fixture = TestBed.createComponent(KategorieEntfernenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

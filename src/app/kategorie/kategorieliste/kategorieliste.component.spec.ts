import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorielisteComponent } from './kategorieliste.component';

describe('KategorielisteComponent', () => {
  let component: KategorielisteComponent;
  let fixture: ComponentFixture<KategorielisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategorielisteComponent]
    });
    fixture = TestBed.createComponent(KategorielisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

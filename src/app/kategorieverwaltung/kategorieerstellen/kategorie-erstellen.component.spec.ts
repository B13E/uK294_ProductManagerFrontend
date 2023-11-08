import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieErstellenComponent } from './kategorie-erstellen.component';

describe('KategorieErstellenComponent', () => {
  let component: KategorieErstellenComponent;
  let fixture: ComponentFixture<KategorieErstellenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategorieErstellenComponent]
    });
    fixture = TestBed.createComponent(KategorieErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

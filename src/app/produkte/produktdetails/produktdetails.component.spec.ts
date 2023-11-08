import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktdetailsComponent } from './produktdetails.component';

describe('ProduktdetailsComponent', () => {
  let component: ProduktdetailsComponent;
  let fixture: ComponentFixture<ProduktdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduktdetailsComponent]
    });
    fixture = TestBed.createComponent(ProduktdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

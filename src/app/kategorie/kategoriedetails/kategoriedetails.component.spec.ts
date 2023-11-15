import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KategoriedetailsComponent } from './kategoriedetails.component';

describe('KategoriedetailsComponent', () => {
  let component: KategoriedetailsComponent;
  let fixture: ComponentFixture<KategoriedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategoriedetailsComponent]
    });
    fixture = TestBed.createComponent(KategoriedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

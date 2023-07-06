import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalProdComponent } from './carousal-prod.component';

describe('CarousalProdComponent', () => {
  let component: CarousalProdComponent;
  let fixture: ComponentFixture<CarousalProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousalProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarousalProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

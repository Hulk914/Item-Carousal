import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalContainerComponent } from './carousal-container.component';

describe('CarousalContainerComponent', () => {
  let component: CarousalContainerComponent;
  let fixture: ComponentFixture<CarousalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

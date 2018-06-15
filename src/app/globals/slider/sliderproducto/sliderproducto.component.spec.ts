import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderproductoComponent } from './sliderproducto.component';

describe('SliderproductoComponent', () => {
  let component: SliderproductoComponent;
  let fixture: ComponentFixture<SliderproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

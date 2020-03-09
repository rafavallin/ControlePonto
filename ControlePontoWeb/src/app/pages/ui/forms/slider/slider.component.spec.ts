import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSliderComponent } from './slider.component';

describe('PageSliderComponent', () => {
  let component: PageSliderComponent;
  let fixture: ComponentFixture<PageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

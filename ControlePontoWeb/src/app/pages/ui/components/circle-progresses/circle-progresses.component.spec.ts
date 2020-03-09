import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCircleProgressesComponent } from './circle-progresses.component';

describe('PageCircleProgressesComponent', () => {
  let component: PageCircleProgressesComponent;
  let fixture: ComponentFixture<PageCircleProgressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCircleProgressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCircleProgressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

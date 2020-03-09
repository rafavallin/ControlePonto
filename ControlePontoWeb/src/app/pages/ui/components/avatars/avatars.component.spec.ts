import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAvatarsComponent } from './avatars.component';

describe('PageAvatarsComponent', () => {
  let component: PageAvatarsComponent;
  let fixture: ComponentFixture<PageAvatarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAvatarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

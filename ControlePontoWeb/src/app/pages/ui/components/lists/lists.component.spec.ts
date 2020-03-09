import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListsComponent } from './lists.component';

describe('PageListsComponent', () => {
  let component: PageListsComponent;
  let fixture: ComponentFixture<PageListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageListsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

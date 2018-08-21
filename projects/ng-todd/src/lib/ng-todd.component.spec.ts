import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToddComponent } from './ng-todd.component';

describe('NgToddComponent', () => {
  let component: NgToddComponent;
  let fixture: ComponentFixture<NgToddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgToddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

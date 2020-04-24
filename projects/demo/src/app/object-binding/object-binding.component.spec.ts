import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectBindingComponent } from './object-binding.component';

describe('ObjectBindingComponent', () => {
  let component: ObjectBindingComponent;
  let fixture: ComponentFixture<ObjectBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

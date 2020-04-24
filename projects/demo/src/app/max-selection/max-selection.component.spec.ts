import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxSelectionComponent } from './max-selection.component';

describe('MaxSelectionComponent', () => {
  let component: MaxSelectionComponent;
  let fixture: ComponentFixture<MaxSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

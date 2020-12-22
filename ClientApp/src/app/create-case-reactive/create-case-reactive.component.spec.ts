import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseReactiveComponent } from './create-case-reactive.component';

describe('CreateCaseReactiveComponent', () => {
  let component: CreateCaseReactiveComponent;
  let fixture: ComponentFixture<CreateCaseReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

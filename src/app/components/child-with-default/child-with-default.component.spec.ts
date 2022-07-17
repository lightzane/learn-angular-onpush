import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithDefaultComponent } from './child-with-default.component';

describe('ChildWithDefaultComponent', () => {
  let component: ChildWithDefaultComponent;
  let fixture: ComponentFixture<ChildWithDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildWithDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWithDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithOnpushComponent } from './child-with-onpush.component';

describe('ChildWithOnpushComponent', () => {
  let component: ChildWithOnpushComponent;
  let fixture: ComponentFixture<ChildWithOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildWithOnpushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWithOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

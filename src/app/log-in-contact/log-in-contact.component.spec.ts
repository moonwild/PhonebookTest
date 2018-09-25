import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInContactComponent } from './log-in-contact.component';

describe('LogInContactComponent', () => {
  let component: LogInContactComponent;
  let fixture: ComponentFixture<LogInContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

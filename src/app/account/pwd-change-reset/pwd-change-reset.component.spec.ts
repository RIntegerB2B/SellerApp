import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdChangeResetComponent } from './pwd-change-reset.component';

describe('PwdChangeResetComponent', () => {
  let component: PwdChangeResetComponent;
  let fixture: ComponentFixture<PwdChangeResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdChangeResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdChangeResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

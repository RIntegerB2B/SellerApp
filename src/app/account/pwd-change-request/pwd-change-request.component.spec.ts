import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdChangeRequestComponent } from './pwd-change-request.component';

describe('PwdChangeRequestComponent', () => {
  let component: PwdChangeRequestComponent;
  let fixture: ComponentFixture<PwdChangeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdChangeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdChangeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCatAddComponent } from './super-cat-add.component';

describe('SuperCatAddComponent', () => {
  let component: SuperCatAddComponent;
  let fixture: ComponentFixture<SuperCatAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCatAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

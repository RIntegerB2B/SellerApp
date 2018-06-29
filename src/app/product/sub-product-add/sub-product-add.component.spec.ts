import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductAddComponent } from './sub-product-add.component';

describe('SubProductAddComponent', () => {
  let component: SubProductAddComponent;
  let fixture: ComponentFixture<SubProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductViewComponent } from './sub-product-view.component';

describe('SubProductViewComponent', () => {
  let component: SubProductViewComponent;
  let fixture: ComponentFixture<SubProductViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProductViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

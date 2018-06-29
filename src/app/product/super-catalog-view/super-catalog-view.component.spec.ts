import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCatalogViewComponent } from './super-catalog-view.component';

describe('SuperCatalogViewComponent', () => {
  let component: SuperCatalogViewComponent;
  let fixture: ComponentFixture<SuperCatalogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCatalogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCatalogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

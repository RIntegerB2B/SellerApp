import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCatalogViewComponent } from './main-catalog-view.component';

describe('MainCatalogViewComponent', () => {
  let component: MainCatalogViewComponent;
  let fixture: ComponentFixture<MainCatalogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCatalogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCatalogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

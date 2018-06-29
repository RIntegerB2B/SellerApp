import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCatalogAddComponent } from './main-catalog-add.component';

describe('MainCatalogAddComponent', () => {
  let component: MainCatalogAddComponent;
  let fixture: ComponentFixture<MainCatalogAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCatalogAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCatalogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

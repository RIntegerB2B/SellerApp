import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProdUploadComponent } from './sub-prod-upload.component';

describe('SubProdUploadComponent', () => {
  let component: SubProdUploadComponent;
  let fixture: ComponentFixture<SubProdUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProdUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProdUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

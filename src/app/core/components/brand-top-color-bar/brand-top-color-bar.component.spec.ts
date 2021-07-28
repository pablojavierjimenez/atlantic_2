import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTopColorBarComponent } from './brand-top-color-bar.component';

describe('BrandTopColorBarComponent', () => {
  let component: BrandTopColorBarComponent;
  let fixture: ComponentFixture<BrandTopColorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandTopColorBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandTopColorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

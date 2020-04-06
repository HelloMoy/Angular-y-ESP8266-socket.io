import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RGBComponent } from './rgb.component';

describe('RGBComponent', () => {
  let component: RGBComponent;
  let fixture: ComponentFixture<RGBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RGBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

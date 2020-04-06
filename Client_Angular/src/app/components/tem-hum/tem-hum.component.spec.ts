import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemHumComponent } from './tem-hum.component';

describe('TemHumComponent', () => {
  let component: TemHumComponent;
  let fixture: ComponentFixture<TemHumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemHumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

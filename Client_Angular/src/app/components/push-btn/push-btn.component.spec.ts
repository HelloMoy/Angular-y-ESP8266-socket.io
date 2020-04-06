import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushBTNComponent } from './push-btn.component';

describe('PushBTNComponent', () => {
  let component: PushBTNComponent;
  let fixture: ComponentFixture<PushBTNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushBTNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushBTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

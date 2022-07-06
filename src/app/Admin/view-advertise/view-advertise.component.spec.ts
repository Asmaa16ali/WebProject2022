import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdvertiseComponent } from './view-advertise.component';

describe('ViewAdvertiseComponent', () => {
  let component: ViewAdvertiseComponent;
  let fixture: ComponentFixture<ViewAdvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdvertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

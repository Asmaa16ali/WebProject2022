import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportGoodsComponent } from './sport-goods.component';

describe('SportGoodsComponent', () => {
  let component: SportGoodsComponent;
  let fixture: ComponentFixture<SportGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

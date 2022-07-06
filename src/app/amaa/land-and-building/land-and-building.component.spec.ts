import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAndBuildingComponent } from './land-and-building.component';

describe('LandAndBuildingComponent', () => {
  let component: LandAndBuildingComponent;
  let fixture: ComponentFixture<LandAndBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandAndBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAndBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

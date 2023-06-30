import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauntsComponent } from './haunts.component';

describe('HauntsComponent', () => {
  let component: HauntsComponent;
  let fixture: ComponentFixture<HauntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauntsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

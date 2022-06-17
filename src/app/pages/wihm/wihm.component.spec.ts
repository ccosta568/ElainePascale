import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WihmComponent } from './wihm.component';

describe('WihmComponent', () => {
  let component: WihmComponent;
  let fixture: ComponentFixture<WihmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WihmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WihmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

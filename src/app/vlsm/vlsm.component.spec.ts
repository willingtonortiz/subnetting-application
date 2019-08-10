import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlsmComponent } from './vlsm.component';

describe('VlsmComponent', () => {
  let component: VlsmComponent;
  let fixture: ComponentFixture<VlsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlsmContainerComponent } from './vlsm-container.component';

describe('VlsmContainerComponent', () => {
  let component: VlsmContainerComponent;
  let fixture: ComponentFixture<VlsmContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlsmContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlsmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

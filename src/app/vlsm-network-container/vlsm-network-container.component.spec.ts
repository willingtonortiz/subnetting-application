import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlsmNetworkContainerComponent } from './vlsm-network-container.component';

describe('VlsmNetworkContainerComponent', () => {
  let component: VlsmNetworkContainerComponent;
  let fixture: ComponentFixture<VlsmNetworkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlsmNetworkContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlsmNetworkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

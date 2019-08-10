import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlsmNetworkComponent } from './vlsm-network.component';

describe('VlsmNetworkComponent', () => {
  let component: VlsmNetworkComponent;
  let fixture: ComponentFixture<VlsmNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlsmNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlsmNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

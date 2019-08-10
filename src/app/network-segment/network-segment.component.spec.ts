import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSegmentComponent } from './network-segment.component';

describe('NetworkSegmentComponent', () => {
  let component: NetworkSegmentComponent;
  let fixture: ComponentFixture<NetworkSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

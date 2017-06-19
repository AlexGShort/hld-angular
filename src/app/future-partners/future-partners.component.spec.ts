import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePartnersComponent } from './future-partners.component';

describe('FuturePartnersComponent', () => {
  let component: FuturePartnersComponent;
  let fixture: ComponentFixture<FuturePartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturePartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

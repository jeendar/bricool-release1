import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMetiersComponent } from './admin-metiers.component';

describe('AdminMetiersComponent', () => {
  let component: AdminMetiersComponent;
  let fixture: ComponentFixture<AdminMetiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMetiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

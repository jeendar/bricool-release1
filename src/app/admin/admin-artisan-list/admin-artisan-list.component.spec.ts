import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtisanListComponent } from './admin-artisan-list.component';

describe('AdminArtisanListComponent', () => {
  let component: AdminArtisanListComponent;
  let fixture: ComponentFixture<AdminArtisanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArtisanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArtisanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtisanProfilComponent } from './admin-artisan-profil.component';

describe('AdminArtisanProfilComponent', () => {
  let component: AdminArtisanProfilComponent;
  let fixture: ComponentFixture<AdminArtisanProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArtisanProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArtisanProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

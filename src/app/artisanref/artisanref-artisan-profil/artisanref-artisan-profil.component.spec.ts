import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanrefArtisanProfilComponent } from './artisanref-artisan-profil.component';

describe('ArtisanrefArtisanProfilComponent', () => {
  let component: ArtisanrefArtisanProfilComponent;
  let fixture: ComponentFixture<ArtisanrefArtisanProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanrefArtisanProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanrefArtisanProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

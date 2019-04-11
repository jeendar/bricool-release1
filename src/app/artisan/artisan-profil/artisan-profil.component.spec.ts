import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanProfilComponent } from './artisan-profil.component';

describe('ArtisanProfilComponent', () => {
  let component: ArtisanProfilComponent;
  let fixture: ComponentFixture<ArtisanProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

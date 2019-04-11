import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientArtisanProfilComponent } from './client-artisan-profil.component';

describe('ClientArtisanProfilComponent', () => {
  let component: ClientArtisanProfilComponent;
  let fixture: ComponentFixture<ClientArtisanProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientArtisanProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientArtisanProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanrefProfilComponent } from './artisanref-profil.component';

describe('ArtisanrefProfilComponent', () => {
  let component: ArtisanrefProfilComponent;
  let fixture: ComponentFixture<ArtisanrefProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanrefProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanrefProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

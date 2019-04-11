import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanrefArtisanListComponent } from './artisanref-artisan-list.component';

describe('ArtisanrefArtisanListComponent', () => {
  let component: ArtisanrefArtisanListComponent;
  let fixture: ComponentFixture<ArtisanrefArtisanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanrefArtisanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanrefArtisanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

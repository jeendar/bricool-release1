import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanProjetsComponent } from './artisan-projets.component';

describe('ArtisanProjetsComponent', () => {
  let component: ArtisanProjetsComponent;
  let fixture: ComponentFixture<ArtisanProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

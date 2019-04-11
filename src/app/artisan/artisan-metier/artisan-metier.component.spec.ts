import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanMetierComponent } from './artisan-metier.component';

describe('ArtisanMetierComponent', () => {
  let component: ArtisanMetierComponent;
  let fixture: ComponentFixture<ArtisanMetierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanMetierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

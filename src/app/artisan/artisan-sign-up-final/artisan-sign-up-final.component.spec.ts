import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanSignUpFinalComponent } from './artisan-sign-up-final.component';

describe('ArtisanSignUpFinalComponent', () => {
  let component: ArtisanSignUpFinalComponent;
  let fixture: ComponentFixture<ArtisanSignUpFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanSignUpFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanSignUpFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

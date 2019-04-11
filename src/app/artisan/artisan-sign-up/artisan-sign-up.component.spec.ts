import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanSignUpComponent } from './artisan-sign-up.component';

describe('ArtisanSignUpComponent', () => {
  let component: ArtisanSignUpComponent;
  let fixture: ComponentFixture<ArtisanSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

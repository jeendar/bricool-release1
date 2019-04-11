import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanrefNavComponent } from './artisanref-nav.component';

describe('NavComponent', () => {
  let component: ArtisanrefNavComponent;
  let fixture: ComponentFixture<ArtisanrefNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanrefNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanrefNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

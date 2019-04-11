import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanrefComponent } from './artisanref.component';

describe('ArtisanrefComponent', () => {
  let component: ArtisanrefComponent;
  let fixture: ComponentFixture<ArtisanrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

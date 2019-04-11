import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientArtisanListComponent } from './client-artisan-list.component';

describe('ClientArtisanListComponent', () => {
  let component: ClientArtisanListComponent;
  let fixture: ComponentFixture<ClientArtisanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientArtisanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientArtisanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

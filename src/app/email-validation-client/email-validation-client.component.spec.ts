import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidationClientComponent } from './email-validation-client.component';

describe('EmailValidationClientComponent', () => {
  let component: EmailValidationClientComponent;
  let fixture: ComponentFixture<EmailValidationClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailValidationClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailValidationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

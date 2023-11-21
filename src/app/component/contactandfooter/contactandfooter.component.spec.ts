import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactandfooterComponent } from './contactandfooter.component';

describe('ContactandfooterComponent', () => {
  let component: ContactandfooterComponent;
  let fixture: ComponentFixture<ContactandfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactandfooterComponent]
    });
    fixture = TestBed.createComponent(ContactandfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

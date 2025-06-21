import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResponsabilitiesFormComponent } from './admin-responsabilities-form.component';

describe('AdminResponsabilitiesFormComponent', () => {
  let component: AdminResponsabilitiesFormComponent;
  let fixture: ComponentFixture<AdminResponsabilitiesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminResponsabilitiesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminResponsabilitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

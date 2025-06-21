import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResponsabilitiesComponent } from './admin-responsabilities.component';

describe('AdminResponsabilitiesComponent', () => {
  let component: AdminResponsabilitiesComponent;
  let fixture: ComponentFixture<AdminResponsabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminResponsabilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminResponsabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

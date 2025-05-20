import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerShopContactComponent } from './burger-shop-contact.component';

describe('BurgerShopContactComponent', () => {
  let component: BurgerShopContactComponent;
  let fixture: ComponentFixture<BurgerShopContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BurgerShopContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerShopContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

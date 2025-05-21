import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerShopAboutComponent } from './burger-shop-about.component';

describe('BurgerShopAboutComponent', () => {
  let component: BurgerShopAboutComponent;
  let fixture: ComponentFixture<BurgerShopAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BurgerShopAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerShopAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

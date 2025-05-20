import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBurgerShopComponent } from './home-burger-shop.component';

describe('HomeBurgerShopComponent', () => {
  let component: HomeBurgerShopComponent;
  let fixture: ComponentFixture<HomeBurgerShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBurgerShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBurgerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

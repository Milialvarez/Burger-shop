import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BurgerShopContactComponent } from './burger-shop-contact/burger-shop-contact.component';
import { HomeBurgerShopComponent } from './home-burger-shop/home-burger-shop.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { BurgerShopAboutComponent } from './burger-shop-about/burger-shop-about.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent,
    ShoppingCartComponent,
    BurgerShopContactComponent,
    HomeBurgerShopComponent,
    NavComponentComponent,
    BurgerShopAboutComponent,
    QuantityInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

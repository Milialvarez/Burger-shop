import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BurgerShopContactComponent } from './burger-shop-contact/burger-shop-contact.component';
import { HomeBurgerShopComponent } from './home-burger-shop/home-burger-shop.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  },
  {
    path: 'beers',
    component: HomeBurgerShopComponent // Usa el nuevo componente aquí
  },
  {
    path:'contact',
    component: BurgerShopContactComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

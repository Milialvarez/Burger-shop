import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BurgerShopContactComponent } from './burger-shop-contact/burger-shop-contact.component';
import { HomeBurgerShopComponent } from './home-burger-shop/home-burger-shop.component';
import { BurgerShopAboutComponent } from './burger-shop-about/burger-shop-about.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';

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
  },
  {
    path: 'about',
    component: BurgerShopAboutComponent
  },
  {
    path: 'admin',
    component: AdminSectionComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Burger } from './burger';
import { BurgerCartService } from '../burger-cart.service';
import { BurgersDataApiService } from '../burgers-data-api.service';

@Component({
  selector: 'app-burger-list',
  standalone: false,
  templateUrl: './burger-list.component.html',
  styleUrl: './burger-list.component.scss'
})
export class BurgerListComponent {

maxReached($event: string) {
  alert($event);
}


  titleBList: string="Our burgers";

  burgers: Burger[] = [];

  constructor(private cart: BurgerCartService, private burger_data: BurgersDataApiService) {}

  addToCart(burger: Burger): void {
  const updatedBurger = { ...burger, stock: burger.stock - burger.quantity }; //actualizo el stock al agregar una hamburguesa al carrito
  
  this.burger_data.updateBurgerStock(updatedBurger).subscribe({
    next: (updated) => {
      this.cart.addToCart(burger);
      burger.stock = updated.stock;
      burger.quantity = 0;
    },
    error: (err) => {
      console.error('An error occurred updating the stock', err);
    }
  });
}


  ngOnInit(): void{
    this.burger_data.getAll().subscribe(burgers=>this.burgers = burgers);
  }

}


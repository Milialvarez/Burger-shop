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

  addToCart(burger:Burger):void{
    this.cart.addToCart(burger);
    burger.stock -= burger.quantity;
    burger.quantity = 0;
  }

  ngOnInit(): void{
    this.burger_data.getAll().subscribe(burgers=>this.burgers = burgers);
  }

}


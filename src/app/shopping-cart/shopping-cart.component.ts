import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger } from '../burger-list/burger';
import { BurgerCartService } from '../burger-cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
 titleSCart: string ='Shopping cart';

 cartList$: Observable<Burger[]>;

 constructor(private cart: BurgerCartService){
  this.cartList$ = cart.cartList.asObservable();
 }

 ngOnInit():void{
  
 }

}

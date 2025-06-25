import { Injectable } from '@angular/core';
import { Burger } from './burger-list/burger';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgerCartService {

  private _cartList: Burger[] = [];
  cartList: BehaviorSubject<Burger[]> = new BehaviorSubject<Burger[]>([]);

  addToCart(burger: Burger) {
    let item : Burger | undefined = this._cartList.find((v1)=> v1.name == burger.name);
    if(!item){
      this._cartList.push({... burger});
    }else{
      item.quantity += burger.quantity;
      item.stock -= burger.quantity;
    }
    this.cartList.next(this._cartList);
  }

  constructor() { }
}

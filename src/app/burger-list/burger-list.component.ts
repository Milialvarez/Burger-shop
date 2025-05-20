import { Component } from '@angular/core';
import { Burger } from './burger';

@Component({
  selector: 'app-burger-list',
  standalone: false,
  templateUrl: './burger-list.component.html',
  styleUrl: './burger-list.component.scss'
})
export class BurgerListComponent {
  titleBList: string="Our burgers";

  burgers: Burger[] = [{
    name: "Cheese Bacon Junior",
    details: "Junior size, double meat with extra bacon and cheese and house dressing",
    price: 5,
    stock: 20,
    image: "assets/cheese_bacon_burger.webp",
    quantity: 0,
  },
  {
    name: "For the kings",
    details: "Extra large, triple meat, triple cheddar, triple bacon, tomatoes, lettuce, caramelized onion and house barbecue",
    price: 10,
    stock: 15,
    image: "assets/for_the_kings.jpg",
    quantity: 0,
  },
{
    name: "Tandil style",
    details: "Extra large, triple meat, provolone cheese, sliced ​cucumber, caramelized onion, and honey mustard sauce",
    price: 12,
    stock: 0,
    image: "assets/tandil_style_burger.jpeg",
    quantity: 0,
}];
  constructor() {}

upQuantity(burger: Burger):void{
  if(burger.quantity < burger.stock){
    burger.quantity++;
  }
}

downQuantity(burger: Burger):void{
  if(burger.quantity>0){
    burger.quantity--;
  }
}

}


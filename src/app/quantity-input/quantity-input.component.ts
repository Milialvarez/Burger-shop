import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  standalone: false,
  templateUrl: './quantity-input.component.html',
  styleUrl: './quantity-input.component.scss'
})
export class QuantityInputComponent {

  ngOnInit(): void{

  }

  @Input()
    quantity!: number;

  @Input()
    max!: number;

  @Output()
  quantityChange: EventEmitter<number> =new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

upQuantity():void{
  if(this.quantity < this.max){
    this.quantity++;
    this,this.quantityChange.emit(this.quantity);
  } else{
    this.maxReached.emit("Se alcanzó el máximo de stock");
  }
}

downQuantity():void{
  if(this.quantity>0){
    this.quantity--;
  }
}
  
}

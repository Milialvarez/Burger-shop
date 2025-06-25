import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BurgersDataApiService } from '../burgers-data-api.service';
import { Burger } from '../burger-list/burger';

@Component({
  selector: 'app-admin-responsabilities-form',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './admin-responsabilities-form.component.html',
  styleUrl: './admin-responsabilities-form.component.scss'
})
export class AdminResponsabilitiesFormComponent {

  constructor(private burgerService: BurgersDataApiService) {

  }

  formAddBurger = new FormGroup({
  name: new FormControl('Nordic Style', [Validators.required]),
  details: new FormControl('Double hake medallion, with spicy mustard, caramelized onion and roquefort cheese', [Validators.required]),
  price: new FormControl(1, [Validators.required, Validators.min(1)]),
  stock: new FormControl(0, [Validators.required, Validators.min(0)]),
  image: new FormControl('assets/nordic_style.webp')
});

onSubmit() {
  if (this.formAddBurger.valid) {
    const burgerData = this.formAddBurger.value;

    // Convertí los valores y agregá quantity: 0 directamente
    const burgerToSend: Burger = {
      name: burgerData.name ?? '',
      details: burgerData.details ?? '',
      price: Number(burgerData.price),
      stock: Number(burgerData.stock),
      image: burgerData.image ?? '',
      quantity: 0  // Siempre 0, no viene del formulario
    };

    this.burgerService.addBurger(burgerToSend).subscribe({
      next: () => {
        alert('BURGER SUCCESSFULLY CREATED');
        this.formAddBurger.reset({
          name: '',
          details: '',
          price: 1,
          stock: 0,
          image: 'assets/cheese_bacon_burger.webp'
          // Ya no necesitás resetear quantity
        });
      },
      error: () => {
        alert('AN ERROR OCCURRED WHILE CREATING THE BURGER');
      }
    });
  } else {
    this.formAddBurger.markAllAsTouched();
  }
}

}

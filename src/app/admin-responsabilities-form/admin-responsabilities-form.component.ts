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
    name: new FormControl('', [Validators.required]),
    details: new FormControl('', [Validators.required]),
    price: new FormControl(1, [Validators.required, Validators.min(1)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    image: new FormControl('assets/cheese_bacon_burger.webp'),
    quantity: new FormControl(0)
  });

  onSubmit() {
    if (this.formAddBurger.valid) {
      const burgerData = this.formAddBurger.value;

      // Convertí los valores si estás usando type="number"
      const burgerToSend: Burger = {
        name: burgerData.name ?? '',
        details: burgerData.details ?? '',
        price: Number(burgerData.price),
        stock: Number(burgerData.stock),
        image: burgerData.image ?? '',
        quantity: Number(burgerData.quantity)
      };


      this.burgerService.addBurger(burgerToSend).subscribe({
        next: () => {
          alert('Burger creada exitosamente');
          this.formAddBurger.reset({
            name: '',
            details: '',
            price: 1,
            stock: 0,
            image: 'assets/cheese_bacon_burger.webp',
            quantity: 0
          });
        },
        error: () => {
          console.error('Error al guardar la burger');
          alert('Ocurrió un error al guardar');
        }
      });
    } else {
      this.formAddBurger.markAllAsTouched();
    }
  }
}

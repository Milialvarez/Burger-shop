import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Burger } from './burger-list/burger';

@Injectable({
  providedIn: 'root'
})


export class BurgersDataApiService {

  private readonly URL = "https://6836317f664e72d28e401eb6.mockapi.io/api/burgers/burger";

  constructor(private http: HttpClient) {
    
  }

  getAll():Observable<Burger[]>{
    return this.http.get<Burger[]>(this.URL).pipe(tap((burgers:Burger[])=>burgers.forEach(burger=> burger.quantity = 0)));
  }

    addBurger(burger: Burger): Observable<Burger> {
    return this.http.post<Burger>(this.URL, burger);
  }
}

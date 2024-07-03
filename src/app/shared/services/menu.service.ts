import { Injectable, signal } from '@angular/core';
import { Food } from './models/Food';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu = signal<Food[]>([]);

  addToMenu(food: Food) {
    this.menu.update(v => 
      [food].concat(v))
  }
}

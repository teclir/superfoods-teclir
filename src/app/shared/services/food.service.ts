import { Injectable, computed, signal } from '@angular/core';
import foods from '../../data/foods';
import { Food } from './models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  foods = signal(foods);

  text = signal("");

  filterArray = computed(() => 
    this.foods().filter((food) => 
      food.name.toLowerCase().trim().includes(this.text().toLowerCase().trim())));

  addFood(food: Food) {
    this.foods.update(v => 
      [food].concat(v))
  }
}


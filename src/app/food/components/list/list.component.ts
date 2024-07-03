import { Component, EventEmitter, Input, Output, Signal, input } from '@angular/core';
import { Food } from '../../../shared/services/models/Food';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-component',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [FormsModule]
})

export class ListComponent {
  foods = input<Food[]>();

  @Output() sentFoodToMenu = new EventEmitter<Food>();

  addToMenu(food: Food) {
    this.sentFoodToMenu.emit(food)
  }
}

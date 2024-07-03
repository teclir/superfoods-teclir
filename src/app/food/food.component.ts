import { Component, EventEmitter, OnInit, Output, inject, input } from '@angular/core';
import { ListComponent } from "../food/components/list/list.component";
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Food } from '../shared/services/models/Food';
import { MenuService } from '../shared/services/menu.service';
import { FoodsService } from '../shared/services/food.service';
import { FormComponent } from "./components/form/form.component";


@Component({
    selector: 'app-food',
    standalone: true,
    templateUrl: './food.component.html',
    styleUrl: './food.component.scss',
    imports: [ListComponent, FormComponent]
})
export class FoodComponent implements OnInit {
private foodsService = inject(FoodsService);
private formBuilder = inject(FormBuilder);
private menuService = inject(MenuService);

foods = this.foodsService.filterArray;
foodForm!: FormGroup;

newFood: Food= {
  name: "",
  calories: 0,
  image: "",
  quantity: 1,
  id: 0
}

ngOnInit(): void {
  this.foodForm = this.formBuilder.group(this.newFood)
}

onSubmit(food: Food) {
  this.foodsService.addFood(food);
}

onFoodMenu(food: Food) {
  this.menuService.addToMenu(food);
}
}

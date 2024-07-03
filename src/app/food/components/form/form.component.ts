import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Food } from '../../../shared/services/models/Food';import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../../shared/components/search/search.component";
@Component({
    selector: 'app-add-food-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
    imports: [ReactiveFormsModule, CommonModule, SearchComponent]
})
export class FormComponent {
  @Input() foodForm!: FormGroup;
  @Output() sentForm = new EventEmitter <Food>();
  isVisible: boolean = false;
  showForm(){
    this.isVisible = true;
  }
  hideForm(){
    this.isVisible = false;
  }
  submit() {
    const food: Food = {
      name: this.foodForm.controls['name'].value,
      calories: this.foodForm.controls['calories'].value,
      image: this.foodForm.controls['image'].value,
      quantity: this.foodForm.controls['quantity'].value,
      id: 0
    }
    this.sentForm.emit(food);
    this.hideForm();
  }
}
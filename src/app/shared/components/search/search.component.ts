import { Component, inject } from '@angular/core';
import { FoodsService } from '../../services/food.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private foodsService = inject (FoodsService);

  text = this.foodsService.text;
}

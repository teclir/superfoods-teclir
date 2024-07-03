import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodComponent } from "./food/food.component";
import { SearchComponent } from "./shared/components/search/search.component";
import { MenuComponent } from "./menu/menu.component";
import { Food } from './shared/services/models/Food';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FoodComponent, SearchComponent, MenuComponent]
})
export class AppComponent {
  title = 'angular-routing';
}

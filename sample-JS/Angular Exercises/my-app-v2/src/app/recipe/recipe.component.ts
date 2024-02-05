import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  name: string = 'RecipeComponent';
  ingredient1: string = 'Lemon';
  ingredient2: string = 'Sugar';
  ingredient3: string = 'Water';

  constructor() { }

  ngOnInit(): void {
  }
}

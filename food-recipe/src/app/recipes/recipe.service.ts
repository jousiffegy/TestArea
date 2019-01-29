import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipies:Recipe[]=[

    new Recipe('Recipe NO.1','TestDescription1','https://cdn.iconscout.com/icon/free/png-256/food-kitchen-plate-spoon-fork-egg-recipe-4-11430.png'),
    new Recipe('Recipe NO.2','TestDescription2','https://cdn.iconscout.com/icon/free/png-256/food-kitchen-plate-spoon-fork-egg-recipe-4-11430.png')
  ];
  constructor() { }
  getRecipes():Recipe[]
  {
    return this.recipies.slice();
  }
}

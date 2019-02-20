import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes:Recipe[]=[

    new Recipe('Recipe NO.1','TestDescription1',
    'https://cdn.iconscout.com/icon/free/png-256/food-kitchen-plate-spoon-fork-egg-recipe-4-11430.png',
    [
      new Ingredient('ing1',3),
      new Ingredient('ing2',4)
    ]
    ),
    new Recipe('Recipe NO.2',
    'TestDescription2',
    'https://cdn.iconscout.com/icon/free/png-256/food-kitchen-plate-spoon-fork-egg-recipe-4-11430.png',
    [
      new Ingredient('ing3',5),
      new Ingredient('ing4',6)
    ])
  ];
  constructor(private shoppingListService:ShoppingListService) { }
  getRecipe(index:number):Recipe{
    return this.recipes.slice()[index];
  }
  getRecipes():Recipe[]
  {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient[])
  {
     this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

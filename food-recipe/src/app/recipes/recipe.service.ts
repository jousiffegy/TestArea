import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipies:Recipe[]=[

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
    return this.recipies.slice()[index];
  }
  getRecipes():Recipe[]
  {
    return this.recipies.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient[])
  {
     this.shoppingListService.addIngredients(ingredients);
  }
}

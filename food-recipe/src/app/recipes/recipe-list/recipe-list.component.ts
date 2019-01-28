import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected=new EventEmitter<Recipe>();
recipies:Recipe[]=[

  new Recipe('TestName1','TestDescription1','https://cdn.iconscout.com/icon/free/png-256/food-kitchen-plate-spoon-fork-egg-recipe-4-11430.png'),
  new Recipe('TestName2','TestDescription2','https://cdn.iconscout.com/icon/free/png-256/food-kitchen-plate-spoon-fork-egg-recipe-4-11430.png')
];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}

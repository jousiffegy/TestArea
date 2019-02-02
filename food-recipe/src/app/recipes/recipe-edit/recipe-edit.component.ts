import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
recipeIndex:number;
recipe:Recipe;
editMode:boolean=false;
  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params
    .subscribe(
(params:Params)=>{
this.editMode=params['id'] !=null;
if(this.editMode)
{
this.recipe=this.recipeService.getRecipe(this.recipeIndex);
this.recipeIndex=+params['id'];

}
console.log(this.editMode);
}

    );
  }

}

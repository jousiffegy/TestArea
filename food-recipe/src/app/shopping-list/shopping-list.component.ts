import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscriber, Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
private ingredients:Ingredient[];
private subscription:Subscription;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
   this.subscription=  this.shoppingListService.ingredientsChanged
    .subscribe(
            (ingredientsChanged:Ingredient[])=>{this.ingredients=ingredientsChanged}
    );

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { Ingredient } from '../../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list.service';

// @Component({
//   selector: 'app-shopping-edit',
//   templateUrl: './shopping-edit.component.html',
//   styleUrls: ['./shopping-edit.component.css']
// })
// export class ShoppingEditComponent implements OnInit {

//   @ViewChild('nameInput') nameInputRef:ElementRef;
//   @ViewChild('amountInput') amountInputRef:ElementRef;


//   constructor(private shoppingListService:ShoppingListService) { }

//   ngOnInit() {
//   }
//   onAddItem(){
//     const name=this.nameInputRef.nativeElement.value;
//     const amount=this.amountInputRef.nativeElement.value;

//      const newIngrediant=new Ingredient(name,amount);
//      this.shoppingListService.addIngredient(newIngrediant);

//   }

// }


import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 


  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(form:NgForm){
    const value=form.value;
     const newIngrediant=new Ingredient(value.name,value.amount);
     this.shoppingListService.addIngredient(newIngrediant);

  }

}

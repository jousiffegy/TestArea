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


import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
   subscription :Subscription;
   editMode=false;
   editedIndex:number;
   editedItem:Ingredient;
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedIndex=index;
        this.editedItem=this.slService.getIngrediant(this.editedIndex);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
    }
    );
      }
      ngOnDestroy(){
        this.subscription.unsubscribe();

      }
      onSubmit(form:NgForm){
    const value=form.value;
     const newIngrediant=new Ingredient(value.name,value.amount);
     if(this.editMode){
        this.slService.updateIngredients(this.editedIndex,newIngrediant);
     }
     else
     {
      this.slService.addIngredient(newIngrediant);
     }
     this.editMode=false;
     form.reset();

  }

  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete()
  {
    this.onClear();
    this.slService.deleteIngredient(this.editedIndex);

  }

}

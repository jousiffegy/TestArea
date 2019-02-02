import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from '../app/recipes/recipes.component';
import { ShoppingListComponent } from '../app/shopping-list/shopping-list.component'

const routes: Routes = [
  {path:'',redirectTo: '/recipe',pathMatch:'full'},
  {path:'recipe',component: RecipesComponent },
  {path:'shopping-list' , component:ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("Dough", 5),
        new Ingredient("Stick", 1)
      ];

      ingredientAdded = new EventEmitter<Ingredient[]>();

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient); 
        this.ingredientAdded.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); // spread operator turns ingredients into list instead of array
        this.ingredientAdded.emit(this.ingredients.slice());        
      }
}

import { Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient("Dough", 5),
        new Ingredient("Stick", 1)
      ];

      ingredientAdded = new Subject<Ingredient[]>();

      getIngredient(index: number) {
        return this.ingredients[index];
      }

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient); 
        this.ingredientAdded.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); // spread operator turns ingredients into list instead of array
        this.ingredientAdded.next(this.ingredients.slice());        
      }

      updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientAdded.next(this.ingredients.slice());
      }

      deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientAdded.next(this.ingredients.slice());
      }
}

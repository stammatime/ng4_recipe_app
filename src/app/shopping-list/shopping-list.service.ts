import { Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("Dough", 5),
        new Ingredient("Stick", 1)
      ];

      ingredientAdded = new Subject<Ingredient[]>();

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
}

import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 

  recipes: Recipe[] = [
    new Recipe("Beef Wellington","A local delicacy","https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mitarashi_dango_by_denver935.jpg/1200px-Mitarashi_dango_by_denver935.jpg"),
    new Recipe("Dango","A delicious dish","http://wppullzone1.epicmatcha.netdna-cdn.com/wp-content/uploads/2016/03/matcha-cookies-hanami-dango.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test","Test","https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mitarashi_dango_by_denver935.jpg/1200px-Mitarashi_dango_by_denver935.jpg"),
    new Recipe("Test2","Test2","http://wppullzone1.epicmatcha.netdna-cdn.com/wp-content/uploads/2016/03/matcha-cookies-hanami-dango.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public name:string;
  public description:string;
  public imgPath:string;

  constructor(name:string, desc:string, imgPath:string) {

    this.description=desc;
    this.imgPath=imgPath;
    this.name=name;
   }

  ngOnInit() {
  }

}

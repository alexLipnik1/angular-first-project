import { Component } from '@angular/core';
import { IAnimal } from '../ianimal';
import {AnimalEnum} from '../animal-enum.enum';
import {AnimalAction} from '../animal-action';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent extends AnimalAction  implements IAnimal {

sayHallo(){
  return super.sayHallo() + `I am a cat !!!`;
}
animalType:AnimalEnum = AnimalEnum.Dog;
title = `component ${AnimalEnum[this.animalType]}`

animalName:string = "tom";
animalFullInfo:() => string =  function():string{
  return `animalName : ${this.animalName}`
}

}

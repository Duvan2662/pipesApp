import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public heroes : Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color : Color.blue
    },
    {
      name: 'Flash',
      canFly: false,
      color : Color.red
    },
    {
      name: 'Hulk',
      canFly: false,
      color : Color.green
    },
    {
      name: 'Thor',
      canFly: true,
      color : Color.purple
    },
    {
      name: 'Batman',
      canFly: true,
      color : Color.black
    },
  ]



  toggleUpperCase (): void {
    this.isUpperCase = !this.isUpperCase;
  }

}

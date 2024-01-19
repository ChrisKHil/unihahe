import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tilegrid',
  templateUrl: './tilegrid.component.html',
  styleUrls: ['./tilegrid.component.scss'],
})
export class TilegridComponent {

  @Input() items: FoodItem[] = [];
  @Input() displayProperties: FoodItemKey[] = [];

  constructor() {

  }

  public addItem() {

  }
}



export interface FoodItem {
  name: string;
  quantity: amount;
  unit?: string;
  expiry?: string;
}
export type FoodItemKey = keyof FoodItem;

export type amount = `${string} ${string}`;

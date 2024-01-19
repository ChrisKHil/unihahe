import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fridgeItems: FoodItem[] = [
    {name: 'Milk', quantity: 1, unit: 'litre', expiry: '2020-05-01'},
    {name: 'Eggs', quantity: 12, unit: 'units', expiry: '2020-05-01'},
    {name: 'Bread', quantity: 1, unit: 'loaf', expiry: '2020-05-01'}
  ]

  constructor() {}

  public addItem() {

  }

}

export interface FoodItem {
  name: string;
  quantity: number;
  unit?: string;
  expiry?: string;
}

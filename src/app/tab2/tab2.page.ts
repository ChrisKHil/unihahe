import { Component } from '@angular/core';
import { FoodItem } from '../components/tilegrid/tilegrid.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  foodItems: FoodItem[] = [
    {name: 'Milk', quantity: '1 litre', expiry: '2020-05-01'},
    {name: 'Eggs', quantity: '12 pcs', expiry: '2020-05-01'},
    {name: 'Bread', quantity: '1 loaf', expiry: '2020-05-01'}
  ]

  constructor() {}

}

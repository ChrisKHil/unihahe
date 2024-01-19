import { NgModule } from '@angular/core';
import { TilegridComponent } from './tilegrid.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,],
  exports: [TilegridComponent],
  declarations: [TilegridComponent],
})
export class TilegridModule{}

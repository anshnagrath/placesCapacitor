import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlacesRoutingModule} from './places-routing.module';
import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesRoutingModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}

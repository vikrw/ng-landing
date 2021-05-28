import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyCarComponent } from './buy-car.component';
import { BuyCarRoutingModule } from './buy-car-routing.module';

@NgModule({
  imports: [BuyCarRoutingModule, CommonModule],
  declarations: [BuyCarComponent],
})
export class BuyCarModule {}

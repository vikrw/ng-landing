import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellCarComponent } from './sell-car.component';
import { SellCarRoutingModule } from './sell-car-routing.module';

@NgModule({
  imports: [SellCarRoutingModule, CommonModule],
  declarations: [SellCarComponent],
})
export class SellCarModule {}

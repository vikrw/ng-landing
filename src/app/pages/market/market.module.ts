import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketComponent } from './market.component';
import { MarketRoutingModule } from './market-routing.module';

@NgModule({
  imports: [MarketRoutingModule, CommonModule],
  declarations: [MarketComponent],
})
export class MarketModule {}

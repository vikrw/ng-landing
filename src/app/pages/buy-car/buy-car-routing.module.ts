import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyCarComponent } from './buy-car.component';

const routes: Routes = [
  {
    path: '',
    component: BuyCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyCarRoutingModule {}

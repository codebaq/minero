import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinerComponent } from './miner.component';

const routes: Routes = [
  {
    path : '',
    component : MinerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class MinerRoutingModule { }

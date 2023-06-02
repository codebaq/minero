import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './design.component';

const routes: Routes = [
  {
    path :'',
    component : DesignComponent,
    children : [
      { path : 'miner', loadChildren : ()=> import('./../miner/miner.module').then(m => m.MinerModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }

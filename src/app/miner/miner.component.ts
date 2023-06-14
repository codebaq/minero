import { Component, OnInit } from '@angular/core';
import { Miners } from './miners'
import { MinerService } from './../services/miner.service'

@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.css']
})
export class MinerComponent implements OnInit {

  ListMiner : any = Miners
  constructor(private MinerService : MinerService) { }

  ngOnInit(): void {
  }

  test(i : any){
    //this.miner.BtcBunchLogin()
    let NombreMiner = this.ListMiner[i].nombre
    let cookieMiner = this.ListMiner[i].cookies
    this.MinerService.PlayMiner(NombreMiner, cookieMiner)
  }
} 
 
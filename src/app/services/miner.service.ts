import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1',
    "Content-Type": "application/json"
  }),
  body : '',  
};

@Injectable({
  providedIn: 'root'
})
export class MinerService {

  Url : string = 'http://localhost:5000/'

  constructor(private http : HttpClient) { }

  PlayMiner(name : any, cookie : any){
    if(name == 'hyperfaucet'){
      console.log('entre')
      this.hyperfaucetMiner(cookie)
    } else if (name == 'ad2word'){
      this.ad2wordMiner(cookie)
    }
  }

  hyperfaucetMiner(cookie : any){
    httpOptions.body = cookie
    this.http.post(this.Url + 'hyperfaucet', httpOptions).subscribe(res => {
      console.log(res)
    })
  }
  ad2wordMiner(cookie : any){
    httpOptions.body = cookie
    this.http.post(this.Url + 'ad2word', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

  TronFreeLogin(){
    this.http.get(this.Url + 'tronfreelogin', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

  BtcBunchLogin(){ 
    this.http.get(this.Url + 'btcbunchlogin', httpOptions).subscribe(res => {
      console.log(res)
    })
  }
}

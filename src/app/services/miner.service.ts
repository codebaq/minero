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
      this.hyperfaucetMiner(cookie)
    } else if (name == 'ad2word'){
      this.ad2wordMiner(cookie)
    } else if(name == 'biduefaucet'){
      this.biduefaucetMiner(cookie)
    } else if(name == 'lalafaucet'){
      this.lalafaucetminer(cookie)
    } else if(name == 'mydgcoin'){
      this.mydgMiner(cookie)
    } else if (name == 'ltcking'){
      this.ltckingMiner(cookie)
    } else if(name == 'starbits'){
      this.starbitsMiner(cookie)
    } else if (name == 'faucetwins'){
      this.faucetwinsMiner(cookie)
    } else if (name == 'flashfaucet'){
      this.flashfaucetMiner(cookie)
    } else if (name == 'AutoClaim - adrevlinks'){
      this.adrevlinksMiner(cookie)
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

  biduefaucetMiner(cookie : any){
    httpOptions.body = cookie
    this.http.post(this.Url + 'biduefaucet', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

  lalafaucetminer(cookie : any){ 
    httpOptions.body = cookie
    this.http.post(this.Url + 'lalafaucet', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

  mydgMiner(cookie : any){ 
    httpOptions.body = cookie
    this.http.post(this.Url + 'mydg', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

  ltckingMiner(cookie : any){ 
    httpOptions.body = cookie
    this.http.post(this.Url + 'ltcking', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

  starbitsMiner(cookie : any){ 
    httpOptions.body = cookie
    this.http.post(this.Url + 'starbits', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

  faucetwinsMiner(cookie : any){ 
    httpOptions.body = cookie
    this.http.post(this.Url + 'faucetwins', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

  flashfaucetMiner(cookie : any){ 
    httpOptions.body = cookie
    this.http.post(this.Url + 'flashfaucet', httpOptions).subscribe(res => {
      console.log(res)
    })
  }

async  adrevlinksMiner(cookie : any){
  httpOptions.body = cookie
  let claims = 1  
  while (claims > 0){
   const Adrevlinks = await new Promise(async (resolve,rejects) => {
    await this.http.post(this.Url + 'adrevlinks', httpOptions).subscribe(async (res :  any)=>{
      claims = res['res']
      resolve(await res['res']) 
    })
   })   
    await console.log(claims)  
    await Adrevlinks
  }
    
  }
}

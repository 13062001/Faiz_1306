import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  constructor(private http:HttpClient) { }

  createAccount(data:any,ifsc:number)
  {
    return this.http.post("http://localhost:9098/createAccount/"+ifsc,data);
  }
  createBank(data:any)
  {
    return this.http.post("http://localhost:9098/createBank",data);
  }
  getAccountId(id:number)
  {
    return this.http.get("http://localhost:9098/getAccount/"+id);
  }
  getBankId(id:number)
  {
    return this.http.get("http://localhost:9098/retrieveBank/"+id);
  }
  getAccount()
  {
    return this.http.get("http://localhost:9098/getAccount");
  }
  getBank()
  {
    return this.http.get("http://localhost:9098/getBank");
  }
  updateAccount(data:any)
  {
    return this.http.post("http://localhost:9098/updateAccount",data);
  }
  deleteAccount(id:number)
  {
    return this.http.get("http://localhost:9098/deleteAccount/"+id);
  }
  updateBank(data:any)
  {
    return this.http.post("http://localhost:9098/updateBank",data);
  }
  deleteBank(id:number)
  {
    return this.http.get("http://localhost:9098/deleteBank/"+id);
  }
  createTran(tran:Transaction)
  {
    return this.http.post("http://localhost:9098/transaction",tran);
  }
  credit(accNo:number,amt:number)
  {
    return this.http.get("http://localhost:9098/credit/"+accNo+"/"+amt);
  }
  debit(accNo:number,amt:number)
  {
    return this.http.get("http://localhost:9098/debit/"+accNo+"/"+amt);
  }

}

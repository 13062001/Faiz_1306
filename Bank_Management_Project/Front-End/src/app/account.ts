import { Transaction } from "./transaction";
export class Account {
    accNo:number;
    type:string;
    cifNo:number;
    balance:number;
    aadharNo:number;
    contact:number;
    email:string;
    address:string;
    panNo:string;
    tran:Transaction[];
}

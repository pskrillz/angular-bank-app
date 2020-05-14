import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }

  account: any = {
    fname:'Pi',
    lname: 'Farah',
    age: 27,
    address: {
      street: '1234 street st',
      city: 'San Diego',
      state: 'CA',
      zip: 92117,
      country: 'United States'
    },
    balance: 200,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };

  value: number;
  transactionGenerated = false;
  transactionHistory = false;



  withdraw() {
    console.log(this.value)
    if ( this.value > this.account.balance) {
      return alert('insufficent funds!')}

    this.account.balance -= this.value
    this.transactionGenerated = true;
    this.account.transactions.push({
      date: '05-05-02',
      type: 'withdrawal',
      amount: this.value,
      currency: 'usd'
      })
    
    this.value = 0
    
  } 
   

   deposit() {
    
    this.account.balance += this.value
      this.transactionGenerated = true
    
    this.account.transactions.push({
      date: '05-05-02',
      type: 'deposit',
      amount: this.value,
      currency: 'usd'
    })
    this.value = 0
   }

   homeScreen(){
     this.transactionGenerated = false;
     this.transactionHistory = false;
   }

   showTransactionHistory() {
    // this.transactionHistory = true
   
    if (this.transactionHistory === false) {
      this.transactionHistory = true
    } else {this.transactionHistory = false}
    
   }






}

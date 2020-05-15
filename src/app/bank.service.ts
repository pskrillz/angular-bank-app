import { Injectable } from '@angular/core';
import { e } from '@angular/core/src/render3';

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


  // Properties dynamic display (default)
  value: number;

  
  transactionGenerated = false;
  transactionHistory = false;
  showCustInfo = true;
  greeting = true;
  balanceView = false
  defaultScreen = true;


  allExeceptOneToggle(){
    this.transactionGenerated = false;
    this.transactionHistory = false;
    this.showCustInfo = true;
    this.greeting = true;
    this.balanceView = false
    this.defaultScreen = true;
  }


  withdraw() {
    console.log(this.value)
    if ( this.value > this.account.balance) {
      return alert('insufficent funds!')}

    if ( this.value === null || this.value === 0) {
       return alert('No Amount Was Entered')
    }

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
    if ( this.value === null || this.value === 0) {
      return alert('No Amount Was Entered')
    }


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
     this.greeting = true
   }

   showTransactionHistory() {
    // this.transactionHistory = true

    if (this.transactionHistory === false) {
      this.transactionHistory = true
    } else {this.transactionHistory = false}
    
   }


   showBalance() {
    //  this.homeScreen();
   if (this.balanceView === false) {
        this.balanceView = true
        this.transactionGenerated = false;
        this.transactionHistory = false;
        this.greeting = false;
        this.balanceView = true

   } else {
    
    }

   }





}

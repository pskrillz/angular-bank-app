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
  balanceView = false;
  defaultScreen = true;
  staffName = 'Becky';
  beckyUID = '#02120'



  withdraw() {
    console.log(this.value)
    if ( this.value > this.account.balance) {
      return alert('insufficent funds!')}

    if ( this.value === undefined || this.value === 0) {
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
    if ( this.value === undefined || this.value === 0) {
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

  






   allExceptChosen(view1, view2, view3){
    this.transactionGenerated = false;
    this.transactionHistory = false;
    this.showCustInfo = false;
    this.greeting = false;
    this.balanceView = false
    this.defaultScreen = false;

    if (view1 === 'transactionGenerated' 
        || view2 === 'transactionGenerated'
        || view3 === 'transactionGenerated') {
      this.transactionGenerated = true
    }

    if (view1 === 'transactionHistory' 
        || view2 === 'transactionHistory'
        || view3 === 'transactionHistory') {
      this.transactionHistory = true
    }

    if (view1 === 'showCustInfo' 
        || view2 === 'showCustInfo'
        || view3 === 'showCustInfo') {
      this.showCustInfo = true
    }

    if (view1 === 'greeting' 
        || view2 === 'greeting'
        || view3 === 'greeting') {
      this.greeting = true
    }

    if (view1 === 'balanceView' 
        || view2 === 'balanceView'
        || view3 === 'balanceView') {
      this.balanceView = true
    }

    if (view1 === 'defaultScreen' 
        || view2 === 'defaultScreen'
        || view3 === 'defaultScreen') {
      this.defaultScreen = true
    }
    
  }



}

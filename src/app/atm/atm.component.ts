import { Component } from '@angular/core';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css'],
  providers: [BankService], // is this needed?
})
export class AtmComponent {

  // value: number;
  // balance: number;
  // transactionGenerated = false

  constructor( public BankService: BankService) {
    
    console.log(BankService.account.balance)
  }



  // withdraw() {
  //   this.balance -= this.value
  //   console.log(this.balance)
  //   this.transactionGenerated = true
  //  }

  // deposit() {
  //   this.balance += this.value
  //   console.log(this.balance)
  //   this.transactionGenerated = true

    // for some reason it's adding the numbers here like a string
    // but not for the withdraw
  // } 



}

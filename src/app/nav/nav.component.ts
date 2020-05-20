import { Component } from '@angular/core';
import { BankService } from '../bank.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public BankService: BankService) { }


atmWindow(){
  this.BankService.atmWindow()
  
}

atmTab(){
  return {'active': true}
}



}

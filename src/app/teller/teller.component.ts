import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css'],
  providers: [BankService]
})
export class TellerComponent {

  constructor( public BankService: BankService) { }

}

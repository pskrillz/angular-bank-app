import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  emailAddress: string 
  satisfaction: string
  comment: string


  submitForm() {
    if (this.emailAddress == undefined ||
        this.satisfaction == undefined||
        this.comment == undefined){
          return alert('Please fill all fields')
        }
    
    
    alert(this.emailAddress + this.satisfaction + this.comment)
    this.router.navigate([`/atm`])
    
  }



}




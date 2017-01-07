import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  reasons: any[];

  constructor() {
    this.reasons = [
      { "text": "General Help", "value": "General Help" },
      { "text": "Product Help", "value": "Product Help" }
    ];
  }

  ngOnInit() {
  }

}

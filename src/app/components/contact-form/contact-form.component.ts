import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../models/contactform.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  formModel: ContactForm;

  constructor() {
    this.formModel = new ContactForm([
      { "text": "General Help", "value": "General Help" },
      { "text": "Product Help", "value": "Product Help" }
    ]);
  }

  ngOnInit() {
  }

}

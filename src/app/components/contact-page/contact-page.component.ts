import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({ transform: 'translateX(-200%)' })),
      state('active', style({ transform: 'translateX(0)' })),
      transition('inactive => active', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms 550ms ease-in', keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class ContactPageComponent implements OnInit {
  nextP: number = 1;

  constructor() { }

  ngOnInit() {
  }

  showP(val: number): string {
    if (this.nextP >= val) {
      return "active";
    }
    else {
      return "inactive";
    }
  }

  getNext(event: Event): void {
    event.preventDefault();
    this.nextP++;
  }

}

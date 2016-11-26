import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1
        })
      ),
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('1000ms ease-in')
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AboutPageComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Just to test if it works (it does).  Would be good if I need to do something on the click before going to the page.  Otherwise I would use a guard.
  //To turn back on import - import { Router } from '@angular/router';
  //Inject Router.
  //Uncomment below.
  goToAbout(event: Event):void {
    event.preventDefault();
    //this.router.navigate(['/about']);
  }

}

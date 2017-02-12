import { Component, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {


  constructor(    iconRegistry: MdIconRegistry, 
                  sanitizer: DomSanitizer,
                  public router: Router) {

    iconRegistry.addSvgIcon('ether', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/data_usage.svg'));
  }
  

  openLeftNav() {
    console.log("sidenav open");
    
  }

  routeHome() {
    this.router.navigate(['/home']);
  }
  routeContacts() {
    this.router.navigate(['/contacts']);
  }
  routeNotifications() {
    this.router.navigate(['/notifications']);
  }
  
  title = 'app works!';
  
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  
    
}

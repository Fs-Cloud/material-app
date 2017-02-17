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
  routeMessages() {
    this.router.navigate(['messages']);
  }
  
  title = 'app works!';

  userAvatar = 'assets/8.jpg';
  homeMenuImage = 'assets/icons/home_icon@2x.png';
  salesMenuImage = 'assets/icons/sales_icon@2x.png';
  opportunitiesMenuImage = 'assets/icons/opportunities_icon@2x.png';
  accountsMenuImage = 'assets/icons/accounts_icon@2x.png';
  marketsMenuImage = 'assets/icons/markets_icon@2x.png';
  messagesMenuImage = 'assets/icons/messages_icon@2x.png';
  contactsMenuImage = 'assets/icons/contacts_icon@2x.png';
  calendarMenuImage = 'assets/icons/calendar_icon@2x.png';
  tasksMenuImage = 'assets/icons/tasks_icon@2x.png';
  notesMenuImage = 'assets/icons/notes_icon@2x.png';
  
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

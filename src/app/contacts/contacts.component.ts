import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transitions';
import { MapsComponent } from '../maps/maps.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contacts = [
    {
      name: 'Nancy Hanson',
      updated: new Date('1/1/16'),
      photo: '../assets/daniel.jpg'
    },
    {
      name: 'Daniel Howell',
      updated: new Date('1/17/86'),
      photo: '../assets/8.jpg'
    },
    {
      name: 'Willie Rogers',
      updated: new Date('1/28/96'),
      photo: '../assets/13.jpg'
    },
    {
      name: 'Katherine Mills',
      updated: new Date('1/13/13'),
      photo: '../assets/5.jpg'
    }
  ];
  

}

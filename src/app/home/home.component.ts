import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transitions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teamMembers = [
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

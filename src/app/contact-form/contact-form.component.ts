import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  selectedValue: string = 'mr';

  salutations = [
    {value: 'mr', viewValue: 'Mr.'},
    {value: 'mrs', viewValue: 'Mrs.'},
    {value: 'ms', viewValue: 'Ms.'},
    {value: 'dr', viewValue: 'Dr.'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  mapDraggable: boolean = true;
  zoomControl: boolean = false;
  streetViewControl: boolean = false;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}

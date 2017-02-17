import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-widget',
  templateUrl: './maps-widget.component.html',
  styleUrls: ['./maps-widget.component.scss']
})
export class MapsWidgetComponent implements OnInit {

  mapDraggable: boolean = true;
  zoomControl: boolean = false;
  streetViewControl: boolean = false;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}

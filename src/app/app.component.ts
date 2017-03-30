import { Component, DoCheck } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck { 
  locationUrl = '';
  routerUrl = '';
  
  constructor(private location: Location, private router: Router) { }

  ngDoCheck() {
    this.locationUrl = this.location.path();
    this.routerUrl = this.router.url;
  }
}
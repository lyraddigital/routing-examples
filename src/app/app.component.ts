import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentLocationUrl: string = '';
  currentRouterUrl: string = '';
  
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.currentLocationUrl = this.location.path();
  }

  ngDoCheck() {
    this.currentRouterUrl = this.router.url;
  }
}
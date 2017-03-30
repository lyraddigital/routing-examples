import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  url = "";
  queryString = "";
  personId = "";
  data = {};
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(u => {
      this.url = "";
      u.forEach(rl => this.url += `/${rl.path}`)
    });
    
    this.activatedRoute.data.subscribe(d => this.data = d);
    this.activatedRoute.params.subscribe(p => this.personId = p['id']);

    this.url = this.activatedRoute.snapshot.queryParams.forEach(rl => this.url += `/${rl.path}`);
    this.personId = this.activatedRoute.snapshot.params['id'];
    this.data = this.activatedRoute.snapshot.data;
  }
}
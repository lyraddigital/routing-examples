import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ChildComponent,
    HomeComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'child',
        component: ChildComponent
      },
      {
        path: 'childTwo',
        component: Child2Component
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { RepoComponent } from './repo.component';

@Component({
  selector: 'sp-list',
  template: '<h1> for now </h1>',
  //templateUrl: './templates/list.html',
  directives: [ RepoComponent ]
})

export class ListComponent { }

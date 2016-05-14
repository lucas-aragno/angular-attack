import { Component } from '@angular/core';
import { Repo } from './repo.component';
import { RepoComponent } from './repo.component';

@Component({
  selector: 'sp-list',
  templateUrl: './templates/list.html',
  directives: [ RepoComponent ]
})

export class ListComponent { }

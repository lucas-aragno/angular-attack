import { Component, OnInit } from '@angular/core';
import { RepoComponent } from './repo.component';
import { InputComponent } from './input.component';
import { ListService } from '../services/repo.service';

@Component({
  selector: 'sp-list',
  templateUrl: 'app/templates/list.html',
  directives: [ RepoComponent, InputComponent ],
  providers: [ ListService ]
})

export class ListComponent implements OnInit {
  public repos : Object;

  constructor(private listService : ListService) {}

  getRepoList(input) {
    this.listService.getRepos(input).then(
     res => this.repos = res.data.items
    )
  }

  valueChanged(event) {
    this.getRepoList(event.query);
  }

  ngOnInit() {
    this.getRepoList('tetris');
  }
}

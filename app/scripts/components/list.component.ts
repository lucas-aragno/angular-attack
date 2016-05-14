import { Component, OnInit } from '@angular/core';
import { RepoComponent } from './repo.component';
import { ListService } from '../services/repo.service';
@Component({
  selector: 'sp-list',
  templateUrl: 'app/templates/list.html',
  directives: [ RepoComponent ],
  providers: [ ListService ]
})

export class ListComponent implements OnInit {
  public repos : Object;

  constructor(private listService : ListService) {}

  getRepoList() {
    this.repos = this.listService.getRepos('test')
    //(/ repos => this.repos = repos);
  }

  ngOnInit() {
    this.getRepoList();
  }
}

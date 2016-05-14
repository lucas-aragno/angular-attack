import { Component } from '@angular/core';


interface Repo {
  name: string,
  url: string
}

@Component({
  selector: 'sp-repo',
  templateUrl: 'app/templates/repo.html',
  inputs: ['repo']
})

export class RepoComponent {
  repo : Repo = {
    name: 'Angus',
    url: 'github.com/moove-it/Angus'
  }
}

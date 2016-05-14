import { Component } from '@angular/core';


interface Repo {
  name: string,
  html_url: string,
  stargazers_count: number,
  open_issues: number
}

@Component({
  selector: 'sp-repo',
  templateUrl: 'app/templates/repo.html',
  inputs: ['repo']
})

export class RepoComponent {
  repo : Repo = {
    name: 'Angus',
    html_url: 'github.com/moove-it/Angus',
    stargazers_count: 0,
    open_issues: 0
  }
}

import { RepoComponent } from '../components/repo.component';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class ListService {

  getRepos(query) {
    console.warn('QUERY HERE: ', query);
    let cleanQuery = query.split(' ').join('+');
    let url = `https://api.github.com/search/repositories?q=${cleanQuery}&sort=stars`;
    return axios.get(url);
  }
}

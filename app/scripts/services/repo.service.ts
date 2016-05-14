import { RepoComponent } from '../components/repo.component';
import { REPOS } from '../constants/list.data.constant';

import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable()
export class ListService {

  getRepos(query) {
    let cleanQuery = query.split(' ').join('+');
    let url = `https://api.github.com/search/repositories?q=${cleanQuery}&sort=stars`;
    return axios.get(url);
  }
}

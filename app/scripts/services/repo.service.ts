import { RepoComponent } from '../components/repo.component';
import { REPOS } from '../constants/list.data.constant';

import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable()
export class ListService {

  getRepos(query) {
    let url = "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc";
    return axios.get(url);
  }
}

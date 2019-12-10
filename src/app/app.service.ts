import { Injectable } from '@angular/core';
import  * as appConst  from './constants/appConstants.json';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    let result;
    if (username != appConst.USER_NAME) {
      result = appConst.INVALID_USER;
    } else if (password != appConst.PASSWORD) {
      result = appConst.INVALID_PASSWORD
    } else {
      result = appConst.OK
    }
    return result;
  }
  
  getGiRepos(index){
    return this.http.get(`https://api.github.com/users/JakeWharton/repos?page=${index}&per_page=15`)
  }
}

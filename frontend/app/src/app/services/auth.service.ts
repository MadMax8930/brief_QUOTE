import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl : string = environment.api_url;
 

  constructor(private http: HttpClient, private router: Router) { }

  register(user: User):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/user/sign-up", user)
  }

  login(user: User):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/user/login", user)
    .pipe(
      map(
        (resp: any) => {
          localStorage.setItem('TOKEN_APPLI', resp.token);
          localStorage.setItem('name', resp.name);
          console.log('Token Save');
          return resp;
        }
      )
    )
  }

  getName(){
    const name = localStorage.getItem('name');
    if (name) {
      return name;
    } else {
      return null;
    }
  }

  


  logout() {
    localStorage.removeItem('TOKEN_APPLI');
    localStorage.removeItem('name');
    this.router.navigate(["/"]);
  }

}
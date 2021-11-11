import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { NewUser } from './new-user';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  _url='http://localhost:3000/login';
  constructor(private _http: HttpClient) { }

  public logInUserFromRemote(user: NewUser){
      return this._http.post<any>(this._url, user);
  }
  
}

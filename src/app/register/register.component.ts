import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewUser } from '../new-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new NewUser(0,'','','');
  errorMsg ='error occured';
  
  constructor(private _http: HttpClient) { }
  registerUser(){

   return this._http.post<any>('http://localhost:3000/register',this.user)
   .pipe(catchError(this.errorHandler)) 
   .subscribe(
    data => console.log('Success!', data),
    error => this.errorMsg ='Please Check details'
  )

  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }


  ngOnInit(): void {
  }

}

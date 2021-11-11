import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from '../new-user';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new NewUser(1,'','','');
  msg ='';
  constructor(private _service: RegisterUserService, private _route: Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.logInUserFromRemote(this.user).subscribe(
      data => {console.log('response received');
      this._route.navigate(['/homeScreen']);

    },
      error => {console.log('exception occured');
      this.msg ='Please enter valid emailid and password'; 
  }
    )
  }
}


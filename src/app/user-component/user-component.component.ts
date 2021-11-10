import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  constructor(private _registrationService: RegistrationService) { }
   submitted = false;
   hasError=true;
   invalidAge= true;
   errorMsg = '';
   selectedFile = null;
  date : Date = new Date();
  userModel= new User('','','',this.date,'','','','','','','','');
  
  validateAge(dob:Date){
    const bdate = new Date(dob);
    const timeDiff = Math.abs(Date.now() - bdate.getTime() );
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    if(age<18)
      this.invalidAge = true;
    
    else 
    this.invalidAge = false;
    console.log(age);
  }
 
  validateType(type:string){
    if(type == '')
      this.hasError=true
  
    else 
    this.hasError=false;
  }

  

  onSubmit(){
    this.submitted=true;
    this._registrationService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusText
    )
  }
  ngOnInit(): void {

    
  }

}

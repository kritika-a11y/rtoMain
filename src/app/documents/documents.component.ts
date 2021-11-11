import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  fileName = '';
  submitted= false;
 
  _url='http://localhost:3000/register';
  file!: File;
  constructor(private _http: HttpClient) { }
  
  onFileSelected(event:any) {

      this.file = <File>event.target.files[0];
      this.fileName=this.file.name;
   
}

  onUpload(){
    const fd= new FormData();
    fd.append('image',this.file,this.file.name);
     this._http.post(this._url,fd,{
       reportProgress:true,
       observe:'events'
     }).subscribe(
       data => this.submitted=true,
       events => console.log(events)
     )
  }
  ngOnInit(): void {
  }

}




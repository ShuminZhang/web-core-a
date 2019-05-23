import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  api:string='http://localhost:4200/maga/users';

  userDataList:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.api).subscribe(
      response=>{
        this.userDataList=response;
      }
    )
  }

}

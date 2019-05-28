import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild('userList') userlist;
  @ViewChild('userEdit') useredit;

  userKeyWords:string='';


  constructor() { }

  ngOnInit() {
  }

  doUserSearch(){
    this.userlist.doSearch(this.userKeyWords);
  }

}

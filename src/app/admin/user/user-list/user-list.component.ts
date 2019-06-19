import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/sve/admin/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

//  api:string='http://localhost:4200/maga/users';

  pageIndex = 1;
  pageSize = 10;
  total = 1;
  //loading = true;

  userDataList:any=[];
  tableOptions:any = {"loading":true,"pageIndex":1,"pageSize":10,"total":26,"sortName":null,"sortValue":null,"keywords":null}

  constructor(
    private el:ElementRef,
    private renderer2:Renderer2,
//    private http:HttpClient,
    private user:UserService) { }

  ngOnInit() {
    // this.http.get(this.api).subscribe(
    //   response=>{
    //     this.userDataList=response;
    //   }
    // )

    this.user.listUser(this.tableOptions).subscribe(results=>{
      console.log(results);
      this.userDataList=results;
    })


  }

  changePageIndex(e){
    console.log(e);
  }

  changePageSize(e){
    console.log(e);
  }

  doSearch(keys:string):void{
    console.log(keys);
    this.user.searchUser(keys,this.pageIndex,this.pageSize).subscribe(results=>{
      console.log(results);
    })
  }

  isUserSelected:boolean=false;
  trStyle:any=null;
  userSelectedId:string=null;
  doSelected(e:string){
    console.log("doSelected:"+e);
    this.isUserSelected = true;
    if(this.trStyle!=null){
        this.trStyle.style = '';
    }
    let tr = this.el.nativeElement.querySelector('.slt-'+e);
    this.trStyle = tr;
    this.renderer2.setStyle(tr,'font-weight','bold');
    this.userSelectedId=e;

    //广播选中的用户数据
    //this.user.userSelected(this.userEditCache[e]);
    //广播选中的角色编号
    //this.roleIdsMap = {};
    //this.userEditCache[e].data.roleid.split(":").forEach(element => {
    //  this.roleIdsMap[element] = true;
    //});
    //this.role.roleChanged(this.roleIdsMap);
  }



}

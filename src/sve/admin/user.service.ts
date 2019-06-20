import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

//  api='http://localhost:4200/user';
    api:string = '';

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(
    public http:HttpClient,
    public comm:CommonService) {
      this.api=comm.api.user;
     }

  listUser(pageOptions:any){
//    let pageOptions:any = {'index':pageIndex,'size':pageSize};
    return new Observable<any>((observer)=>{
      this.http.post(this.api+'/list',pageOptions,this.httpOptions).subscribe(response=>{
        console.log(response);
        observer.next(response);     
      })
    })
  }

  searchUser(keywords:any,pageIndex:any,pageSize:any){
    let pageOptions:any = {'keys':keywords,'index':pageIndex,'size':pageSize};
    return new Observable<any>((observer)=>{
      this.http.post(this.api+'/search',pageOptions,this.httpOptions).subscribe(response=>{
        console.log(response);
        observer.next(response);     
      })
    })
  }

  insertUser(user:any){
    return new Observable<any>((observer)=>{
      this.http.post(this.api+'/insert',user,this.httpOptions).subscribe(response=>{
        console.log(response);
        observer.next(response);     
      })
    })
  }

  deleteUser(user:any){
    return new Observable<any>((observer)=>{
      this.http.post(this.api+'/delete',user,this.httpOptions).subscribe(response=>{
        console.log(response);
        observer.next(response);     
      })
    })
  }

  updateUser(user:any){
    return new Observable<any>((observer)=>{
      this.http.post(this.api+'/update',user,this.httpOptions).subscribe(response=>{
        console.log(response);
        observer.next(response);     
      })
    })
  }

}

import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  api={
    'user':'http://localhost:4200/user'
  }

  constructor(public msg:NzMessageService) { }
}

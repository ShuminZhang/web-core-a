import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/sve/protal/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit() {
  }

}

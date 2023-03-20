import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  standalone: true,
  selector: 'standalone-component',
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.scss']
})
export class StandaloneComponentComponent {
  constructor(private loginService: LoginService) { 

  }

  public doLogin(){
    this.loginService.login();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //整个 app 范围内可以注入此服务，避免在 NgModule 里面写配置，参见：https://angular.io/api/core/Injectable#providedIn
})
export class LoginService {

  constructor() { }

  public login(){
    console.log('login');
  }

  public logout(){
    console.log('logout');
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public username!:string;
  public password!:string;

  constructor() { }

  setData(username:string, password:string){
    this.username=username;
    this.password=password;
  }

  getData(){
    let userInfo={
      username:this.username,
      password:this.password
    }
    return userInfo;
  }
}

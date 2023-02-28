import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public showPassword:boolean=false;
  public loginForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _ds: DataService, private _router:Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitData() {
    if (this.loginForm.valid) {
      let username = this.loginForm.value.username;
      let password = this.loginForm.value.password;
      this._ds.setData(username, password);
      let userInfo={
        username,
        password
      }
      localStorage.setItem('currentUser', JSON.stringify(userInfo));
      this._router.navigateByUrl('/home');
    }
  }

  passwordVisibility(){
    this.showPassword=!this.showPassword;
  }
}

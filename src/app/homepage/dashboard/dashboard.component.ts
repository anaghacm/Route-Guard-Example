import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userInfo!: any;
  constructor(private _ds: DataService, private _router:Router) {
    this.userInfo = this._ds.getData();
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this._router.navigateByUrl('');
  }
}

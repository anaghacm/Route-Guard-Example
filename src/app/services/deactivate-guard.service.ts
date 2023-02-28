import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DashboardComponent } from '../homepage/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<DashboardComponent> {

  constructor() { }

  canDeactivate(component: DashboardComponent): boolean{
    return confirm("Are you sure you want to logout?");
  }

}

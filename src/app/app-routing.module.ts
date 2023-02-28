import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { DeactivateGuardService } from './services/deactivate-guard.service';

const routes: Routes = [
  {
    path:'', component:LoginPageComponent
  },
  {
    path:'home', component:DashboardComponent, canActivate: [AuthenticationGuardService], canDeactivate:[DeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

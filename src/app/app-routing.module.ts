import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthService} from "./services/auth.service";

const routes: Routes = [{
  path: 'home',
  component: DashboardComponent,
  canActivate: [AuthService]
  },
  {
    path: "",
    component: LoginPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

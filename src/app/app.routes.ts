import { Routes } from '@angular/router';
import {ListeFraisComponent} from "./lister-frais/lister-frais.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
export const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'frais/liste', component: ListeFraisComponent },
  { path: 'home', component: HomeComponent },
  { path:'', redirectTo: '/home', pathMatch: 'full'}

]

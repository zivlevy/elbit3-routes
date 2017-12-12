import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [
    {path: 'login', component: LoginComponent, data: {title: 'ziv is here'}},
    {path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard]},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: 'login' , pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

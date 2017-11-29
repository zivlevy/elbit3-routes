import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {TodosComponent} from './todos/todos.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TodoModule} from './todo/todo.module';
import {CoreModule} from './core/core.module';
import {LoginGuard} from './guards/login.guard';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        AboutComponent,
        TodosComponent,
        NotFoundComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule,
        TodoModule,
        AppRoutingModule


    ],
    providers: [LoginGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}

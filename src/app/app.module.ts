import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CardContainerComponent } from './card-container/card-container.component';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { appRoutes } from './app.routing';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardContainerComponent,
    LoginComponent,
    NavBarComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    DataService,
    UserService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

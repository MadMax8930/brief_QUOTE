import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GenquoteComponent } from './genquote/genquote.component';
import { FooterComponent } from './footer/footer.component';
import { AddquoteComponent } from './addquote/addquote.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { GeneratorComponent } from './generator/generator.component';
import { GeneratorLoggedInComponent } from './generator-logged-in/generator-logged-in.component';
import { NavbarLoggedInComponent } from './navbar-logged-in/navbar-logged-in.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    GenquoteComponent,
    FooterComponent,
    AddquoteComponent,
    GeneratorComponent,
    GeneratorLoggedInComponent,
    NavbarLoggedInComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

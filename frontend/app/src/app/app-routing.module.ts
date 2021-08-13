import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddquoteComponent } from './addquote/addquote.component';
import { GeneratorComponent } from './generator/generator.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

     { path: 'login', component: LoginComponent},
     { path: 'sign-up', component: SignupComponent},
     { path: '', component: GeneratorComponent },
     { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
     { path: 'quote', component: AddquoteComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

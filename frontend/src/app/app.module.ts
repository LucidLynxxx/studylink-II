import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start/start.component';
import { LoginComponent } from './components/start/login/login.component';
import { SupportComponent } from './components/support/support.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordResetComponent } from './components/start/password-reset/password-reset.component';
import { SignupComponent } from './components/start/signup/signup.component';
import { HomepageComponent } from './components/website/homepage/homepage.component';
import { NavbarComponent } from './components/website/navbar/navbar.component';
import { MatchesComponent } from './components/website/matches/matches.component';
import { TeacherComponent } from './components/website/teacher/teacher.component';
import { StudentComponent } from './components/website/student/student.component';
import { SettingsComponent } from './components/website/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    LoginComponent,
    SupportComponent,
    FooterComponent,
    PasswordResetComponent,
    SignupComponent,
    HomepageComponent,
    NavbarComponent,
    MatchesComponent,
    TeacherComponent,
    StudentComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

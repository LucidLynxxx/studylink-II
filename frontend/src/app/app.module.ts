import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start/start.component';
import { LoginComponent } from './components/start/login/login.component';
import { SupportComponent } from './components/support/support.component';
import { FooterComponent } from './components/footer/footer.component';
import { PasswordResetComponent } from './components/start/password-reset/password-reset.component';
import { SignupComponent } from './components/start/signup/signup.component';
import { HomepageComponent } from './components/website/homepage/homepage.component';
import { NavbarComponent } from './components/website/navbar/navbar.component';
import { MatchesComponent } from './components/website/matches/matches.component';
import { StudentComponent } from './components/website/student/student.component';
import { SettingsComponent } from './components/website/settings/settings.component';
import { TutorComponent } from './components/website/tutor/tutor.component';

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
    StudentComponent,
    SettingsComponent,
    TutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

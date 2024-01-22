import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start/start.component';
import { SupportComponent } from './components/support/support.component';
import { LoginComponent } from './components/start/login/login.component';
import { PasswordResetComponent } from './components/start/password-reset/password-reset.component';
import { SignupComponent } from './components/start/signup/signup.component';
import { HomepageComponent } from './components/website/homepage/homepage.component';
import { MatchesComponent } from './components/website/matches/matches.component';
import { TeacherComponent } from './components/website/teacher/teacher.component';
import { StudentComponent } from './components/website/student/student.component';
import { SettingsComponent } from './components/website/settings/settings.component';

const routes: Routes = [
  { path: '', component:  StartComponent},
  { path: 'login', component: LoginComponent },
  { path: 'support', component: SupportComponent},
  { path: 'login/password-reset', component: PasswordResetComponent},
  { path: 'login/signup', component: SignupComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'matches', component: MatchesComponent},
  { path: 'teacher', component: TeacherComponent},
  { path: 'student', component: StudentComponent},
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

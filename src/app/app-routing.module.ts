import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AdminGuardService } from './services/auth/admin-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, canActivate:[AuthGuardService]
  },
  {
    path: '',
    component: HomeComponent, canActivate:[AuthGuardService]
  },
  {
    path: 'about',
    component: AboutComponent, canActivate:[AuthGuardService]
  },
  {
    path: 'character',
    component: CharacterComponent, canActivate:[AuthGuardService]
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent, canActivate:[AuthGuardService, AdminGuardService]
  },
  {
    path: 'add',
    component: AddCharacterComponent, canActivate:[AuthGuardService, AdminGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

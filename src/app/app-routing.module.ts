import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ForumComponent} from './components/forum/forum.component';
import {SettingsComponent} from './components/settings/settings.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {BlogItemDetailComponent} from './components/blog-item-detail/blog-item-detail.component';
import {BlogCreateComponent} from './components/blog-create/blog-create.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'forum',
    component: ForumComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'blog/details/:id',
    component: BlogItemDetailComponent,
  },
  {
    path: 'create-post',
    component: BlogCreateComponent,
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

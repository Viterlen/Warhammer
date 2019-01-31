import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ForumComponent } from './components/forum/forum.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AuthInterceptor} from './services/auth/auth.interceptor';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForumComponent,
    SettingsComponent,
    RegistrationComponent,
    NavbarComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemDetailComponent,
    BlogItemImageComponent,
    BlogItemTextComponent,
    SearchBarComponent,
    SummaryPipe,
    FilterPipe,
    BlogCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    [AuthService],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

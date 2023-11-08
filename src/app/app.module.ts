import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from "./elements/header/header.component";
import { FooterComponent } from "./elements/footer/footer.component";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorizationInterceptor } from './interceptors/interceptor-jwt.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiModule, Configuration} from "./openapi-client";

@NgModule({
  declarations: [


    StartseiteComponent,
    NotFoundComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
      HttpClientModule,
    ApiModule.forRoot(() => {
      return new Configuration({
        basePath: 'https://product-manager.cyrotech.ch'
      })
    }),

    // Ensure RouterModule is imported
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthorizationInterceptor
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

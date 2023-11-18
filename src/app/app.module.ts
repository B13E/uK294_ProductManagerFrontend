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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration } from "./openapi-client";
import { AdminComponent } from "./benutzerverwaltung/admin/admin.component";
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from '@angular/forms';
import { KategorielisteComponent } from './kategorie/kategorieliste/kategorieliste.component';
import { ProduktlisteComponent } from './produkte/produktliste/produktliste.component';
import { ProduktdetailsComponent } from './produkte/produktdetails/produktdetails.component';
import {RegisterComponent} from "./auth/registrieren/register.component";
import {DatenschutzComponent} from "./elements/footer/datenschutz/datenschutz.component";
import {ImpressumComponent} from "./elements/footer/impressum/impressum.component";
import {KategoriedetailsComponent} from "./kategorie/kategoriedetails/kategoriedetails.component";
import {ProduktErstellenComponent} from "./produktverwaltung/produkterstellen/produkt-erstellen.component";
import {ProduktBearbeitenComponent} from "./produktverwaltung/produktbearbeiten/produkt-bearbeiten.component";
import {ProduktEntfernenComponent} from "./produktverwaltung/produktentfernen/produkt-entfernen.component";
import {KategorieErstellenComponent} from "./kategorieverwaltung/kategorieerstellen/kategorie-erstellen.component";
import {KategorieBearbeitenComponent} from "./kategorieverwaltung/kategoriebearbeiten/kategorie-bearbeiten.component";
import {KategorieEntfernenComponent} from "./kategorieverwaltung/kategorieentfernen/kategorie-entfernen.component";
import {BenutzerComponent} from "./benutzerverwaltung/benutzer/benutzer.component";
import {MatCheckboxModule} from "@angular/material/checkbox";


// @ts-ignore
@NgModule({
  declarations: [
    StartseiteComponent,
    NotFoundComponent,
    AppComponent,
    AdminComponent,
    AdminComponent,
    KategorielisteComponent,
    AppComponent,
  //  HeaderComponent,
  //  FooterComponent,
    StartseiteComponent,
    NotFoundComponent,
  //  LoginComponent,
  //  RegisterComponent,
    DatenschutzComponent,
    ImpressumComponent,
    KategoriedetailsComponent,
    KategorielisteComponent,
    ProduktdetailsComponent,
    ProduktlisteComponent,
    ProduktErstellenComponent,
    ProduktBearbeitenComponent,
    ProduktEntfernenComponent,
    KategorieErstellenComponent,
    KategorieBearbeitenComponent,
    KategorieEntfernenComponent,
    AdminComponent,
    BenutzerComponent,
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
        FormsModule,
        HeaderComponent,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        ApiModule.forRoot(() => {
            return new Configuration({
                basePath: 'https://product-manager.cyrotech.ch'
            })
        }),
        MatCheckboxModule,

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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/registrieren/register.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { DatenschutzComponent } from './elements/footer/datenschutz/datenschutz.component';
import { ImpressumComponent } from './elements/footer/impressum/impressum.component';
import { KategoriedetailsComponent } from './kategorie/kategoriedetails/kategoriedetails.component';
import { KategorielisteComponent } from './kategorie/kategorieliste/kategorieliste.component';
import { ProduktdetailsComponent } from './produkte/produktdetails/produktdetails.component';
import { ProduktlisteComponent } from './produkte/produktliste/produktliste.component';
import { ProduktErstellenComponent } from './produktverwaltung/produkterstellen/produkt-erstellen.component';
import { ProduktBearbeitenComponent } from './produktverwaltung/produktbearbeiten/produkt-bearbeiten.component';
import { ProduktEntfernenComponent } from './produktverwaltung/produktentfernen/produkt-entfernen.component';
import { KategorieErstellenComponent } from './kategorieverwaltung/kategorieerstellen/kategorie-erstellen.component';
import { KategorieBearbeitenComponent } from './kategorieverwaltung/kategoriebearbeiten/kategorie-bearbeiten.component';
import { KategorieEntfernenComponent } from './kategorieverwaltung/kategorieentfernen/kategorie-entfernen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminAuthGuard } from './benutzerverwaltung/admin-auth.guard';
import { AdminComponent } from "./benutzerverwaltung/admin/admin.component";
import {BenutzerComponent} from "./benutzerverwaltung/benutzer/benutzer.component";

const routes: Routes = [
  { path: '', redirectTo: 'startseite', pathMatch: 'full' },
  { path: 'startseite', component: StartseiteComponent },
  {
    path: 'auth',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ],
  },
  {
    path: 'rechtliches',
    children: [
      { path: 'impressum', component: ImpressumComponent },
      { path: 'datenschutz', component: DatenschutzComponent }
    ],
  },
  {
    path: 'admin',
    canActivate: [AdminAuthGuard],
    component: AdminComponent,
    children: [
      { path: 'produkterstellen', component: ProduktErstellenComponent },
      { path: 'produktbearbeiten', component: ProduktBearbeitenComponent },
      { path: 'produktentfernen', component: ProduktEntfernenComponent },
      { path: 'kategorieerstellen', component: KategorieErstellenComponent },
      { path: 'kategoriebearbeiten', component: KategorieBearbeitenComponent },
      { path: 'kategorieentfernen', component: KategorieEntfernenComponent },
      { path: 'benutzer', component: BenutzerComponent },
    ]
  },

  { path: 'kategoriedetails', component: KategoriedetailsComponent },
  { path: 'kategorieliste', component: KategorielisteComponent },
  { path: 'produktdetails', component: ProduktdetailsComponent },
  { path: 'produktliste', component: ProduktlisteComponent },

  // Error Handling
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

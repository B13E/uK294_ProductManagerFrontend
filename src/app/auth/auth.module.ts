import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registrieren/register.component';

// Das Modul AuthModule, das für Authentifizierungsfunktionalitäten zuständig ist
@NgModule({
  declarations: [

  ],
  imports: [
    LoginComponent, // Fügt LoginComponent zum Modul hinzu
    RegisterComponent, // Fügt RegisterComponent zum Modul hinzu
    CommonModule, // Importiert CommonModule für Angular-Direktiven
    ReactiveFormsModule, // Importiert ReactiveFormsModule für reaktive Formulare
    MatFormFieldModule, // Importiert MatFormFieldModule für Material Design Formularfelder
    MatInputModule, // Importiert MatInputModule für Material Design Inputfelder
  ]
})
export class AuthModule { }

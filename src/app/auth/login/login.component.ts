import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {LoginRequestDto, UserControllerService} from "../../openapi-client";
import {Router, RouterLink} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-login', // Komponenten-Selector
  templateUrl: './login.component.html', // Template-Datei
  styleUrls: ['./login.component.scss'], // Stylesheet-Datei
  imports: [
    ReactiveFormsModule, // Importiert ReactiveFormsModule für Formularfunktionalität
    MatFormFieldModule, // Importiert Material Design Formular-Module
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    CommonModule, // Allgemeines Modul für Angular-Direktiven
  ],
  standalone: true, // Markiert die Komponente als standalone
})
  export class LoginComponent implements OnInit {
  // Dependency Injection für Service und Router
  constructor(private userService: UserControllerService,
              private router: Router) {
  }

  // Initialisiert das Login-Formular mit Validierungen
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    // Lifecycle-Hook, wird beim Initialisieren der Komponente aufgerufen
  }

  // Methode zum Einreichen des Formulars und Ausführen der Login-Logik
  logForm(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); // Logging für Debugging-Zwecke
      this.userService.login(this.loginForm.value as LoginRequestDto).subscribe(val => {
        localStorage.setItem('ACCESS_TOKEN', val.token as string); // Speichert Token im LocalStorage
        alert('erfolgreich eingeloggt'); // Zeigt Erfolgsmeldung an
        this.router.navigateByUrl('/startseite'); // Navigiert zur Startseite
      });
    }
  }

  // Gibt eine Fehlermeldung zurück, wenn das E-Mail-Feld nicht den Anforderungen entspricht
  getEmailErrorMessage(): string {
    const emailControl = this.loginForm.get('email');
    if (emailControl && emailControl.hasError('required')) {
      return 'Eine E-Mail ist erforderlich.';
    } else if (emailControl && emailControl.hasError('email')) {
      return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    return '';
  }

  // Gibt eine Fehlermeldung zurück, wenn das Passwortfeld nicht den Anforderungen entspricht
  getPasswordErrorMessage(): string {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl && passwordControl.hasError('required')) {
      return 'Ein Passwort ist erforderlich.';
    }
    return '';
  }
}

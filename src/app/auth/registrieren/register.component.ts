import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RegisterDto, UserControllerService } from "../../openapi-client";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { Router } from '@angular/router';

// Deklaration der RegisterComponent mit ihren Abhängigkeiten und Styles
@Component({
  selector: 'pm-registrieren',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule
  ],
  standalone: true
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserControllerService,
    private router: Router
  ) {
    // Initialisiert das Registrierungsformular mit Validierungsregeln
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      street: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      zip: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      country: ['', Validators.required],
      phone: ['', Validators.maxLength(15)],
      mobilePhone: ['', Validators.maxLength(15)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]],
      confirmPassword: [''],
    });
  }

  ngOnInit(): void {
    // Periodisches Logging des Formularstatus zur Überwachung (nur zu Entwicklungs-/Debugging-Zwecken)
    setInterval(() => {
      console.log(this.registerForm);
    }, 1500);
  }

  // Funktion zur Handhabung des Formularabsendens
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value as RegisterDto).subscribe(val => {
        alert("erfolgreich registriert");
        this.router.navigateByUrl('/auth/login'); // Navigiert zur Login-Seite nach erfolgreicher Registrierung
      });
    }
  }

  // Funktion zur Generierung von Fehlermeldungen basierend auf dem Formularstatus
  getErrorMessage(field: string): string {
    const control = this.registerForm.get(field);

    if (control && control.errors) {
      if (control.hasError('required')) {
        return 'Dieses Feld ist erforderlich.';
      } else if (control.hasError('minlength')) {
        return `Mindestens ${control.getError('minlength')?.requiredLength} Zeichen erforderlich.`;
      } else if (control.hasError('maxlength')) {
        return `Maximal ${control.getError('maxlength')?.requiredLength} Zeichen erlaubt.`;
      } else if (control.hasError('email')) {
        return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      } else if (control.hasError('pattern')) {
        return 'Die Eingabe entspricht nicht dem erforderlichen Format.';
      }
    }
    return '';
  }
}

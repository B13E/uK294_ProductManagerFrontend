// src/app/auth/auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registrieren/register.component';
// ... andere Importe und Deklarationen nach Bedarf

@NgModule({
  declarations: [
    // ... andere Deklarationen
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    // ... andere Angular Material-Module und zusätzliche Importe
  ]
})
export class AuthModule { }

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
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],


  imports: [
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, RouterLink, CommonModule,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class LoginComponent implements OnInit {



  constructor(private userService: UserControllerService,
              private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

   ngOnInit(): void {
   }

  logForm(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value as LoginRequestDto).subscribe(val => {
        localStorage.setItem('ACCESS_TOKEN', val.token as string);
        alert('erfolgreich eingeloggt');
        this.router.navigateByUrl('/startseite');
      })
    }
  }
  getEmailErrorMessage(): string {
    const emailControl = this.loginForm.get('email');
    if (emailControl && emailControl.hasError('required')) {
      return 'Eine E-Mail ist erforderlich.';
    } else if (emailControl && emailControl.hasError('email')) {
      return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    return '';
  }

  getPasswordErrorMessage(): string {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl && passwordControl.hasError('required')) {
      return 'Ein Passwort ist erforderlich.';
    }
    // ...weitere Bedingungen bei Bedarf...
    return '';
    return '';

//  register() {
  }
}


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {RegisterDto, UserControllerService} from "../../openapi-client";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { Router } from '@angular/router';


@Component({
  selector: 'pm-registrieren',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule, MatCheckboxModule,
  ],
  standalone: true
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  // submit()
  // formgroup.value as RegisterDTO).register
  // Testanmeldung Registrierung 1 DB und nur ein Benutzer möglich

// Für Formular aus swagger kopieren
//  private router: any;
  constructor(private fb: FormBuilder, private userService: UserControllerService, private router: Router) { // FormBuilder - Methode Group für Controlls
    this.registerForm = this.fb.group({
      //namen aus api verwenden
      // anrede: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      // plz: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: [''],
      mobilePhone: [''],
     // kanton: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
    //  agb: [false, Validators.requiredTrue],
    //  newsletter: [false]
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.registerForm);
    }, 1500);
  }

  logForm() {
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value as RegisterDto).subscribe(val => {
        alert("erfolgreich registriert");
        this.router.navigateByUrl('/auth/login'); //-> Navigieren auf http://localhost:4200/auth/login
      });
    }
  }
}
/*
  onRegister() {
    if (this.registerForm.valid) {
      // https://product-manager.cyrotech.ch/});
      console.log(this.registerForm.value);
    }
  }
*/

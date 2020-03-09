import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { fadeIn } from 'src/app/animations/form-error';

@Component({
  selector: 'page-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../sign-in/sign-in.component.scss'],
  animations: [fadeIn]
})
export class PageSignUpComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirm: new FormControl('', [Validators.required, Validators.minLength(5)])
    }, { validators: this.MatchPassword, updateOn: 'blur' });
  }

  signUp(): void {
    this.router.navigate(['']);
  }

  MatchPassword(ac: AbstractControl): ValidatorFn {
    const pass = ac.get('password').value;
    const confirmPass = ac.get('confirm').value;

    if (pass !== confirmPass) {
      ac.get('confirm').setErrors({ notMatch: true });
    }

    return null;
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get confirm() {
    return this.loginForm.get('confirm');
  }
}


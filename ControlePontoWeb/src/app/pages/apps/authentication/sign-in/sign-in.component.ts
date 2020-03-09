import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { fadeIn } from 'src/app/animations/form-error';

@Component({
  selector: 'page-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [fadeIn]
})
export class PageSignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('Admin', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('admin', [Validators.required, Validators.minLength(5)])
    });
  }

  Login(): void {
    this.router.navigate(['']);
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

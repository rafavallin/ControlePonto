import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { fadeIn } from 'src/app/animations/form-error';

@Component({
  selector: 'page-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [fadeIn]
})
export class PageResetPasswordComponent implements OnInit {
  email: FormControl;

  constructor(private router: Router) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  ngOnInit() {
  }

  reset() {
    this.router.navigate(['']);
  }
}

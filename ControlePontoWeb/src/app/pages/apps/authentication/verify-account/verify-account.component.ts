import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class PageVerifyAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  resend() {
    this.router.navigate(['']);
  }

  contactSupport() {
    this.router.navigate(['']);
  }
}

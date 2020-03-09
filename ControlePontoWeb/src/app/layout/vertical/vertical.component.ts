import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { IAppState } from '../../interfaces/app-state';
import { BaseLayoutComponent } from '../base-layout/base-layout.component';
import { HttpService } from '../../services/http/http.service';
import { IOption } from '../../ui/interfaces/option';
import { TCModalService } from '../../ui/services/modal/modal.service';
import * as SettingsActions from '../../store/actions/app-settings.actions';

@Component({
  selector: 'vertical-layout',
  templateUrl: './vertical.component.html',
  styleUrls: [
    '../base-layout/base-layout.component.scss',
    './vertical.component.scss'
  ]
})
export class VerticalLayoutComponent extends BaseLayoutComponent implements OnInit {
  gender: IOption[];
  currentAvatar: string | ArrayBuffer;
  defaultAvatar: string;

  constructor(
    store: Store<IAppState>,
    fb: FormBuilder,
    httpSv: HttpService,
    router: Router,
    elRef: ElementRef,
    modal: TCModalService
  ) {
    super(store, fb, httpSv, router, elRef, modal);
  }

  ngOnInit() {
    super.ngOnInit();

    this.store.dispatch(new SettingsActions.Update({ layout: 'vertical' }));
  }

  getSidebarStyles(): any {
    return {
      'background-image': `linear-gradient(188deg, ${this.appSettings.sidebarBg}, ${this.appSettings.sidebarBg2} 65%)`,
      'color': this.appSettings.sidebarColor
    };
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class PageRadioButtonsComponent extends BasePageComponent implements OnInit, OnDestroy {
  reactiveForm: FormGroup;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private formBuilder: FormBuilder
	) {
    super(store, httpSv);

    this.demoCode = `<tc-radio [value]="'val2'">
  <tc-radio-option [value]="'val1'">Option label</tc-radio-option>
  <tc-radio-option [value]="'val2'">Option label</tc-radio-option>
</tc-radio>`;

    this.pageData = {
      title: 'Radio buttons',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'dashboard'
        },
        {
          title: 'Components',
          route: 'dashboard'
        },
        {
          title: 'Radio buttons'
        }
      ]
    };
	}

  ngOnInit() {
    super.ngOnInit();

    this.initReactiveForm();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      radioField: ['first']
    });
  }
}

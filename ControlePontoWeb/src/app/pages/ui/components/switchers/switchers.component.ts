import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-switchers',
  templateUrl: './switchers.component.html',
  styleUrls: ['./switchers.component.scss']
})
export class PageSwitchersComponent extends BasePageComponent implements OnInit, OnDestroy {
  reactiveForm: FormGroup;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private formBuilder: FormBuilder
  ) {
    super(store, httpSv);

    this.demoCode = `<tc-form-group>
  <tc-switcher>Switcher label</tc-switcher>
</tc-form-group>`;

    this.pageData = {
      title: 'Switchers',
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
          title: 'Switchers'
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
      switcherField: [true]
    });
  }
}

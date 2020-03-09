import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IAppState } from '../../../../interfaces/app-state';
import { BasePageComponent } from '../../../base-page';
import { IOption } from '../../../../ui/interfaces/option';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class PageSelectsComponent extends BasePageComponent implements OnInit, OnDestroy {
	data: IOption[];
  reactiveForm: FormGroup;
  icons: string[];
  countries: string[];
  demoCodeMultiple: string;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private formBuilder: FormBuilder
  ) {
    super(store, httpSv);

    this.demoCode = `<tc-select [placeholder]="'Select placeholder'" [options]="data"></tc-select>`;
    this.demoCodeMultiple = `<tc-select [placeholder]="'Select placeholder'" [options]="data" [multiple]="true"></tc-select>`;

    this.pageData = {
      title: 'Selects',
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
          title: 'Selects'
        }
      ]
    };
    this.icons = [
      'icofont-hail-rainy-sunny',
      'icofont-sun-alt',
      'icofont-wind',
      'icofont-full-sunny',
      'icofont-rainy-thunder',
      'icofont-wave',
      'icofont-snow-alt'
    ];
    this.countries = [
      '51 countries',
      '54 countries',
      '50 countries',
      '23 countries',
      '12 countries',
      '14 countries',
      'does not host any countries'
    ];
    this.initReactiveForm();
  }

  ngOnInit() {
    super.ngOnInit();
    this.getData('assets/data/options.json', 'data', 'setLoaded');
    this.initReactiveForm();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      singleSelect: ['australia'],
      multipleSelect: [['australia', 'antarctica']]
    });
  }
}

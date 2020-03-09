import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-autocompletes',
  templateUrl: './autocompletes.component.html',
  styleUrls: ['./autocompletes.component.scss']
})
export class PageAutocompletesComponent extends BasePageComponent implements OnInit, OnDestroy {
	data: string[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.demoCode =
`<tc-form-group>
  <tc-autocomplete [data]="data" [key]="'country'" [value]="'Ukraine'"></tc-autocomplete>
</tc-form-group>`;

    this.data = [];
    this.pageData = {
      title: 'Autocompletes',
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
          title: 'Autocompletes'
        }
      ]
    };
  }

	ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/autocomplete.json', 'data', 'setLoaded');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

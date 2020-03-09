import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-simple-tables',
  templateUrl: './simple-tables.component.html',
  styleUrls: ['./simple-tables.component.scss']
})
export class PageSimpleTablesComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: any[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Simple tables',
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'dashboard'
        },
        {
          title: 'Tables',
          route: 'dashboard'
        },
        {
          title: 'Simple'
        }
      ]
    };
    this.tableData = [];
	}

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/table.json', 'tableData', 'setLoaded');
	}

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

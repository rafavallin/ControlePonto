import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss']
})
export class PagePaginationTableComponent extends BasePageComponent implements OnInit, OnDestroy {
  tableData: any[];

	constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Pagination tables',
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
          title: 'Pagination'
        }
      ]
    };
    this.tableData = [];
	}

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/table-sorting.json', 'tableData', 'setLoaded');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class PageBadgesComponent extends BasePageComponent implements OnInit, OnDestroy {
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.demoCode = '<tc-badge>Default</tc-badge>';

    this.pageData = {
      title: 'Badges',
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
          title: 'Badges'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

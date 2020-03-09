import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-circle-progresses',
  templateUrl: './circle-progresses.component.html',
  styleUrls: ['./circle-progresses.component.scss'],
})
export class PageCircleProgressesComponent extends BasePageComponent implements OnInit, OnDestroy {
  value: number;

  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);

    this.demoCode = `<tc-circle-progress [value]="50"></tc-circle-progress>`;

    this.pageData = {
      title: 'Circular progresses',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'dashboard',
        },
        {
          title: 'Components',
          route: 'dashboard',
        },
        {
          title: 'Circular progresses',
        },
      ],
    };
  }

  ngOnInit() {
    this.value = 50;
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

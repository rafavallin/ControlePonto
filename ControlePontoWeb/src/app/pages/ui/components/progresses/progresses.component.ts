import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-progress',
  templateUrl: './progresses.component.html',
  styleUrls: ['./progresses.component.scss'],
})
export class PageProgressComponent extends BasePageComponent
  implements OnInit, OnDestroy {
  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);

    this.demoCode = `<tc-progress [color]="'#ec2427'" [progress]="35"></tc-progress>`;

    this.pageData = {
      title: 'Progresses',
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
          title: 'Progresses',
        },
      ],
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

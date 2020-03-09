import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class PageCardsComponent extends BasePageComponent
  implements OnInit, OnDestroy {
  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);

    this.demoCode =
`<tc-card [title]="'Card\'s title'">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Distinctio dolore enim, nemo nihil non omnis temporibus?
  Blanditiis culpa labore velit.Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dicta, provident?
</tc-card>`;

    this.pageData = {
      title: 'Cards',
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
          title: 'Cards',
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

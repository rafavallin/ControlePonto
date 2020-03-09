import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class PageListsComponent extends BasePageComponent
  implements OnInit, OnDestroy {
  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);

    this.demoCode =
`<tc-list>
  <tc-list-item>
    <span tc-list-line>First item</span>
    <span tc-list-line>Secondary text</span>
  </tc-list-item>

  <tc-list-item>
    <span tc-list-line>Second item</span>
    <span tc-list-line>Secondary text</span>
  </tc-list-item>
</tc-list>`;

    this.pageData = {
      title: 'Lists',
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
          title: 'Lists',
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

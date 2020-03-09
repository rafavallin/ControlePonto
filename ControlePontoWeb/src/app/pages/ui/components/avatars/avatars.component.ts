import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class PageAvatarsComponent extends BasePageComponent implements OnInit, OnDestroy {
  demoGroup: string;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.demoCode = `<tc-avatar [src]="'path/to/img.jpg'"></tc-avatar>`;

    this.demoGroup =
`<tc-avatar-group>
  <tc-avatar [src]="'path/to/img.jpg'"></tc-avatar>
  <tc-avatar [tcBgColor]="'#5b97f7'" [initials]="'AI'"></tc-avatar>
  <tc-avatar [src]="'assets/content/user-40-3.jpg'"></tc-avatar>
</tc-avatar-group>`;

    this.pageData = {
      title: 'Avatars',
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
          title: 'Avatars',
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

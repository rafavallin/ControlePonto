import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-textareas',
  templateUrl: './textareas.component.html',
  styleUrls: ['./textareas.component.scss'],
})
export class PageTextareasComponent extends BasePageComponent
  implements OnInit, OnDestroy {
  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);

    this.demoCode =
`<tc-form-group>
   <tc-textarea [value]="'Textarea value'"></tc-textarea>
</tc-form-group>`;

    this.pageData = {
      title: 'Selects',
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
          title: 'Textareas',
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

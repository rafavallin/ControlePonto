import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
})
export class PageDropdownsComponent extends BasePageComponent implements OnInit, OnDestroy {
  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);

    this.demoCode =
`<tc-dropdown>
  <tc-dropdown-button>
    <button [afterIcon]="'icofont icofont-simple-down'" [outline]="true" tc-button>Basic Dropdown</button>
  </tc-dropdown-button>

  <tc-dropdown-content">
    <tc-list class="px-4">
      <tc-list-item>
        <span tc-list-line><a href="#">Dropdown Item 1</a></span>
      </tc-list-item>

      <tc-list-item>
        <span tc-list-line><a href="#">Dropdown Item 2</a></span>
      </tc-list-item>

      <tc-list-item>
        <span tc-list-line><a href="#">Dropdown Item 3</a></span>
      </tc-list-item>

      <tc-list-item>
        <span tc-list-line><a href="#">Dropdown Item 4</a></span>
      </tc-list-item>
    </tc-list>
  </tc-dropdown-content>
</tc-dropdown>`;

    this.pageData = {
      title: 'Dropdowns',
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
          title: 'Dropdowns',
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

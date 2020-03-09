import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BasePageComponent } from '../../../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';
import { TCModalService } from '../../../../ui/services/modal/modal.service';
import { Content } from '../../../../ui/interfaces/modal';

@Component({
  selector: 'page-modal-windows',
  templateUrl: './modal-windows.component.html',
  styleUrls: ['./modal-windows.component.scss']
})
export class PageModalWindowsComponent extends BasePageComponent implements OnInit, OnDestroy {
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService
  ) {
    super(store, httpSv);

    this.demoCode =
`<button tc-button (click)="openModal(modalBody)">Multiplex body</button>

<ng-template #modalBody>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eum eveniet fugiat fugit illum, natus porro
    possimus quisquam soluta vitae. Aperiam molestias quae quaerat quibusdam rerum voluptates! Aspernatur, magnam
    quas?</p>

  <tc-input [placeholder]="'Subscribe'"></tc-input>
</ng-template>`;

    this.pageData = {
      title: 'Modal windows',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Components',
          route: 'default-dashboard'
        },
        {
          title: 'Modal windows'
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

  openModal<T>(body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null) {
    this.modal.open({
      body: body,
      header: header,
      footer: footer,
      options: options
    });
  }

  closeModal() {
    this.modal.close();
  }
}

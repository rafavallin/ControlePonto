import { Component, OnInit, OnDestroy } from '@angular/core';

import * as getISOWeek from 'date-fns/get_iso_week';
import * as endOfMonth from 'date-fns/end_of_month';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class PageDatePickerComponent extends BasePageComponent implements OnInit, OnDestroy {
  date = null;

  startValue: Date | null;
  endValue: Date | null;
  endOpen: boolean;
  isEnglish: boolean;
  ranges: any;

  dateMode: string;

  plainFooter: string;
  footerRender = () => 'extra footer';

  constructor(
    private i18n: NzI18nService,
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.demoCode = `
<tc-form-group>
    <nz-date-picker></nz-date-picker>
</tc-form-group>`;

    this.pageData = {
      title: 'Date picker',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'dashboard'
        },
        {
          title: 'Forms',
          route: 'dashboard'
        },
        {
          title: 'Date picker'
        }
      ]
    };

    this.ranges = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

    this.startValue = null;
    this.endValue = null;
    this.endOpen = false;
    this.isEnglish = true;
    this.plainFooter = 'plain extra footer';
    this.dateMode = 'time';
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  onStartChange(date: Date): void {
    this.startValue = date;
  }

  onEndChange(date: Date): void {
    this.endValue = date;
  }

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endOpen = true;
    }
    console.log('handleStartOpenChange', open, this.endOpen);
  }

  handleEndOpenChange(open: boolean): void {
    console.log(open);
    this.endOpen = open;
  }

  handleDateOpenChange(open: boolean): void {
    if (open) {
      this.dateMode = 'time';
    }
  }

  handleDatePanelChange(mode: string): void {
    console.log('handleDatePanelChange: ', mode);
  }

  onTimeChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date): void {
    console.log('onOk', result);
  }

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  };
}

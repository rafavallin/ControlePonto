import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class PageSliderComponent extends BasePageComponent implements OnInit, OnDestroy {
  value1: number;
  value2: number;
  value3: number;

  min: number;
  mid: number;
  max: number;

  preHighLight: boolean;
  afterHighLight: boolean;

  iconSlider: number;

  marks: any;

  rangeValue1: [number, number];
  rangeValue2: [number, number];

  disabled: boolean;

  constructor(
    http: HttpService,
    store: Store<IAppState>
  ) {
    super(store, http);

    this.demoCode =
`<nz-slider [(ngModel)]="value1"></nz-slider>
<nz-slider nzRange [(ngModel)]="rangeValue1"></nz-slider>`;

    this.pageData = {
      title: 'Slider',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Form',
          route: 'dashboard',
        },
        {
          title: 'Components',
          route: 'dashboard',
        },
        {
          title: 'Slider',
        },
      ],
    };

    this.disabled = true;

    this.value1 = 40;
    this.value2 = 65;
    this.value3 = 70;

    this.rangeValue1 = [30, 80];
    this.rangeValue2 = [40, 75];

    this.min = 0;
    this.max = 20;
    this.mid = (this.min + this.max) / 2;

    this.marks = {
      0: '0°C',
      26: '26°C',
      52: '52°C',
      100: {
        style: {
          color: '#f50'
        },
        label: '<strong>100°C</strong>'
      }
    };
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.sliderValue = 0;
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value: number): void {
    console.log(`onAfterChange: ${value}`);
  }

  set sliderValue(value: number) {
    this.iconSlider = value;
    this.highlightIcon();
  }

  get sliderValue(): number {
    return this.iconSlider;
  }

  highlightIcon() {
    const LOWER = this.iconSlider >= this.mid;
    this.preHighLight = !LOWER;
    this.afterHighLight = LOWER;
  }

  formatter(value: number): string {
    return  `${value}%`;
  }
}

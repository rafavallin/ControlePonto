import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { EChartOption } from 'echarts';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-ngx-echarts',
  templateUrl: './ngx-echarts.component.html',
  styleUrls: ['./ngx-echarts.component.scss']
})
export class PageNgxEchartsComponent extends BasePageComponent implements OnInit, OnDestroy {
  lineOptions: EChartOption;
  line2Options: EChartOption;
  areaOptions: EChartOption;
  barOptions: EChartOption;
  pieOptions: EChartOption;
  pie2Options: EChartOption;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Ngx echarts',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Charts',
          route: 'default-dashboard'
        },
        {
          title: 'Ngx echarts'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();

    this.setAreaOptions();
    this.setBarOptions();
    this.setLineOptions();
    this.setLine2Options();
    this.setLineOptions();
    this.setPieOptions();
    this.setPie2Options();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setLineOptions() {
    this.lineOptions = {
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [350, 933, 1184, 857, 1167, 1330, 1035],
        type: 'line',
        lineStyle: {
          normal: {
            color: '#805aff',
          }
        },
      }]
    };
  }

  setLine2Options() {
    this.line2Options = {
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          symbol: 'triangle',
          symbolSize: 20,
          lineStyle: {
            normal: {
              color: '#cd5447',
              width: 4,
              type: 'dashed',
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#9d5ce5',
              color: '#9d5ce5',
            },
          },
        },
      ],
    };
  }

  setAreaOptions() {
    this.areaOptions = {
      color: ['#7cdb86', '#e9e165', '#cd5447', '#805aff', '#2fa7ff'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'X-1',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'X-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'X-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'X-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'X-5',
          type: 'line',
          stack: 'counts',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
  }

  setBarOptions() {
    const barXAxisData = [];
    const barData1 = [];
    const barData2 = [];

    for (let i = 0; i < 100; i++) {
      barXAxisData.push('Prod. ' + i);
      barData1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      barData2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    this.barOptions = {
      color: ['#e9e165', '#805aff'],
      legend: {
        data: ['USA', 'UK'],
        align: 'left'
      },
      tooltip: {},
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
      },
      xAxis: {
        data: barXAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {},
      series: [
        {
          name: 'USA',
          type: 'bar',
          data: barData1,
          animationDelay: function (idx) {
            return idx * 10;
          }
        },
        {
          name: 'UK',
          type: 'bar',
          data: barData2,
          animationDelay: function (idx) {
            return idx * 10 + 100;
          }
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }

  setPieOptions() {
    this.pieOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
      },
      color: ['#f741b5', '#2fa7ff', '#7cdb86'],
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: 'Schedule',
          type: 'pie',
          radius: '90%',
          center: ['50%', '50%'],
          data: [
            { value: 335 },
            { value: 310 },
            { value: 274 },
            { value: 235 },
            { value: 400 },
          ].sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: '#b3589c',
            },
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function(idx) {
            return Math.random() * 200;
          },
        },
      ],
    };
  }

  setPie2Options() {
    this.pie2Options = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['Ex.1', 'Ex.2', 'Ex.3', 'Ex.4', 'Ex.5', 'Ex.6', 'Ex.7', 'Ex.8']
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
      },
      series: [
        {
          name: 'area',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: [
            { value: 10, name: 'Ex.1' },
            { value: 5, name: 'Ex.2' },
            { value: 15, name: 'Ex.3' },
            { value: 25, name: 'Ex.4' },
            { value: 20, name: 'Ex.5' },
            { value: 35, name: 'Ex.6' },
            { value: 30, name: 'Ex.7' },
            { value: 40, name: 'Ex.8' }
          ]
        }
      ]
    };
  }
}

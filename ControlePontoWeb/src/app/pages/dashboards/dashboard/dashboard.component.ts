import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../base-page';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';
import echarts, { EChartOption } from 'echarts';

@Component({
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class PageDashboardComponent extends BasePageComponent implements OnInit, OnDestroy {
  piOptions: EChartOption;
  pi2Options: EChartOption;
  lineOptions: EChartOption;
  barOptions: EChartOption;
  browsersOptions: EChartOption;
  pieOptions: EChartOption;
  tableData: any[];
  peopleOptions: any[];
  companyOptions: any[];

  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);

    this.peopleOptions = [
      {
        value: 'Bill Gates',
        label: 'Bill Gates',
      },
      {
        value: 'Tim Cook',
        label: 'Tim Cook',
      },
      {
        value: 'Jeff Bezos',
        label: 'Jeff Bezos',
      },
    ];

    this.companyOptions = [
      {
        value: 'Apple',
        label: 'Apple',
      },
      {
        value: 'Microsoft',
        label: 'Microsoft',
      },
      {
        value: 'Google',
        label: 'Google',
      },
    ];

    this.pageData = {
      title: 'Dashboard',
      breadcrumbs: [
        {
          title: 'Home',
          route: 'dashboard',
        },
        {
          title: 'Default',
        },
      ],
    };
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/table.json', 'tableData', 'setLoaded');

    this.setBrowsersChart();

    this.setBarOptions();
    this.setPiOptions();
    this.setLineOptions();
    this.setPieOptions();
    this.setPi2Options();
  }

  setBrowsersChart() {
    this.browsersOptions = {
      tooltip : {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Chrome', 'Safari', 'IE9+', 'Firefox']
      },
      calculable: true,
      series: (() => {
        const series = [];

        for (let i = 0; i < 30; i++) {
          const options = {
            name: 'Usage browser',
            type: 'pie',
            itemStyle: {
              normal: {
                label: {
                  show: i > 28
                },
                labelLine: {
                  show : i > 28,
                  length: 20
                }
              }
            },
            radius: [i * 4 + 40, i * 4 + 42],
            data: [
              {
                value: i * 128 + 80,
                name: 'Chrome',
                itemStyle: { normal: { color: '#f741b5' } }
              },
              {
                value: i * 32  + 320,
                name: 'Safari',
                itemStyle: { normal: { color: '#2fa7ff' } }
              },
              {
                value: i * 16  + 640,
                name: 'IE9+',
                itemStyle: { normal: { color: '#305dff' } }
              },
              {
                value: i * 64  + 160,
                name: 'Firefox',
                itemStyle: { normal: { color: '#fc8b37' } }
              }
            ]
          };
          series.push(options);
        }

        return series;
      })()
    };
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBarOptions() {
    this.barOptions = {
      color: ['#7cdb86', '#fc8b37', '#805aff'],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          show: false,
        },
      ],
      yAxis: [
        {
          type: 'value',
          show: false,
        },
      ],
      series: [
        {
          name: 'Forest',
          type: 'bar',
          smooth: true,
          barWidth: '7px',
          barMaxWidth: '10px',
          barGap: '1px',
          data: [320, 332, 301, 334, 390, 420, 430, 400],
          itemStyle: {
            barBorderRadius: 50,
          },
        },
        {
          name: 'Steppe',
          type: 'bar',
          barWidth: '7px',
          barMaxWidth: '10px',
          data: [220, 182, 191, 234, 290, 320, 380, 370],
          itemStyle: {
            barBorderRadius: 50,
          },
        },
        {
          name: 'Desert',
          type: 'bar',
          barWidth: '7px',
          barMaxWidth: '10px',
          data: [150, 232, 201, 154, 190, 210, 240, 230],
          itemStyle: {
            barBorderRadius: 50,
          },
        },
      ],
    };
  }

  setLineOptions() {
    this.lineOptions = {
      color: ['#f741b5'],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      xAxis: {
        boundaryGap: false,
        show: true,
        type: 'category',
        data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
      },
      yAxis: {
        show: false
      },
      tooltip: {
        trigger: 'axis'
      },
      series: [
        {
          name: 'Activity',
          type: 'line',
          data: [180, 200, 330, 200, 360, 180, 270, 190],
          smooth: true,
          symbol: 'none',
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(247,86,189,0.2)'
                },
                {
                  offset: 0.6,
                  color: 'rgba(242,142,206,0.2)'
                },
                {
                  offset: 1,
                  color: 'rgba(249,227,241,0.2)'
                }
              ])
            }
          },
          markLine: {
            symbol: ['emptyCircle'],
            itemStyle: {
              normal: {
                color: '#d69f9f',
                lineStyle: {
                  type: 'solid'
                }
              }
            },
            data: [
              [
                { xAxis: '12:00', yAxis: 50 },
                { xAxis: '12:00', yAxis: 300 }
              ],
              [
                { xAxis: '13:00', yAxis: 50 },
                { xAxis: '13:00', yAxis: 300 }
              ],
              [
                { xAxis: '14:00', yAxis: 50 },
                { xAxis: '14:00', yAxis: 300 }
              ],
              [
                { xAxis: '15:00', yAxis: 50 },
                { xAxis: '15:00', yAxis: 300 }
              ],
              [
                { xAxis: '16:00', yAxis: 50 },
                { xAxis: '16:00', yAxis: 300 }
              ],
              [
                { xAxis: '17:00', yAxis: 50 },
                { xAxis: '17:00', yAxis: 300 }
              ]
            ]
          }
        }
      ]
    };
  }

  setPiOptions() {
    this.piOptions = {
      color: ['#c565e7'],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      xAxis: {
        boundaryGap: false,
        type: 'category',
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          name: 'Patients 2019',
          step: false,
          type: 'line',
          smooth: true,
          symbol: 'none',
          data: [
            95,
            180,
            220,
            180,
            142,
            103,
            143,
            243,
            304,
            243,
            144,
            107,
            141,
            226,
          ],
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#c565e7',
                },
                {
                  offset: 0.6,
                  color: '#d5ade4',
                },
                {
                  offset: 1,
                  color: '#f8e5ff',
                },
              ]),
            },
          },
        },
      ],
    };
  }

  setPi2Options() {
    this.pi2Options = {
      ...this.piOptions,
      ...{
        color: ['#47bf62'],
        series: [
          {
            name: 'Income in month',
            step: false,
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: [
              95,
              202,
              240,
              202,
              142,
              103,
              143,
              243,
              304,
              243,
              144,
              107,
              141,
              226,
            ],
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(71, 191, 98, .3)',
                  },
                  {
                    offset: 0.6,
                    color: 'rgba(98, 234, 129, .2)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(111, 219, 136, .1)',
                  },
                ]),
              },
            },
          },
        ],
      },
    };
  }

  setPieOptions() {
    this.pieOptions = {
      color: ['#f741b5', '#2fa7ff', '#7cdb86'],
      series: [
        {
          type: 'pie',
          radius: ['90%', '88%'],
          label: {
            show: false,
          },
          data: [
            { value: 250 },
            { value: 500 },
            { value: 250 }
          ],
          markPoint : {
            data : [
              {
                x: '50%',
                y: '10px',
                symbol: 'emptyCircle',
                symbolSize: 15,
                itemStyle: {
                  normal: {
                    color: 'rgba(247,65,181,0.1)',
                    borderWidth: 5
                  }
                }
              },
              {
                x: '50%',
                y: '10px',
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                  normal: {
                    color: '#F741B5'
                  }
                }
              },
              {
                x: '170px',
                y: '50%',
                symbol: 'emptyCircle',
                symbolSize: 15,
                itemStyle: {
                  normal: {
                    color: 'rgba(47,167,255,0.1)',
                    borderWidth: 5
                  }
                }
              },
              {
                x: '170px',
                y: '50%',
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                  normal: {
                    color: '#2fa7ff'
                  }
                }
              },
              {
                x: '10px',
                y: '50%',
                symbol: 'emptyCircle',
                symbolSize: 15,
                itemStyle: {
                  normal: {
                    color: 'rgba(124,219,134,0.1)',
                    borderWidth: 5
                  }
                }
              },
              {
                x: '10px',
                y: '50%',
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                  normal: {
                    color: '#7cdb86'
                  }
                }
              }
            ]
          }
        }
      ]
    };
  }
}

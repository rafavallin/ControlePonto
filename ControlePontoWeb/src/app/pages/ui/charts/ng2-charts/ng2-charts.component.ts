import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-ng2-charts',
  templateUrl: './ng2-charts.component.html',
  styleUrls: ['./ng2-charts.component.scss']
})
export class PageNg2ChartsComponent extends BasePageComponent implements OnInit, OnDestroy {
	chartColors: any;

	lineChartData: any[];
	lineChartOptions: any;
	lineChartLegend: boolean;
	lineChartType: string;
	lineChartLabels: any[];

	barChartOptions: any;
	barChartLabels: string[];
	barChartType: string;
	barChartLegend: boolean;
	barChartData: any[];
  barChartColors: any;

	doughnutChartLabels: string[];
	doughnutChartData: number[];
	doughnutChartType: string;
  doughnutChartColors: any;

	radarChartLabels: string[];
	radarChartData: any;
	radarChartType: string;

	pieChartLabels: string[];
	pieChartData: number[];
	pieChartType: string;
  pieChartColors: any;

	polarAreaChartLabels: string[];
	polarAreaChartData: number[];
	polarAreaChartType: string;
	polarAreaChartLegend: boolean;
  polarAreaChartColors: any;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
	) {
    super(store, httpSv);

    this.pageData = {
      title: 'Ng2 charts',
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
          title: 'Ng2 charts'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();

	  this.setBarChart();
    this.setChartColors();
    this.setDoughnutChart();
    this.setLineChart();
    this.setPolarAreaChart();
    this.setPieChart();
    this.setRadarChart();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setChartColors() {
	  this.chartColors = [
		  {
			  backgroundColor: 'transparent',
			  borderColor: '#7cdb86',
			  pointBackgroundColor: '#7cdb86',
			  pointBorderColor: '#fff',
			  pointHoverBackgroundColor: '#fff',
			  pointHoverBorderColor: '#7cdb86'
		  },
		  {
			  backgroundColor: 'transparent',
			  borderColor: '#2fa7ff',
			  pointBackgroundColor: '#2fa7ff',
			  pointBorderColor: '#fff',
			  pointHoverBackgroundColor: '#fff',
			  pointHoverBorderColor: '#2fa7ff'

		  },
		  {
			  backgroundColor: 'transparent',
			  borderColor: '#805aff',
			  pointBackgroundColor: '#805aff',
			  pointBorderColor: '#fff',
			  pointHoverBackgroundColor: '#fff',
			  pointHoverBorderColor: '#805aff'
		  }
	  ];
  }

  setLineChart() {
	  this.lineChartData = [
		  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
		  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
		  { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
	  ];

	  this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	  this.lineChartOptions = {
		  responsive: true
	  };

	  this.lineChartLegend = true;

	  this.lineChartType = 'line';
  }

  setBarChart() {
	  this.barChartOptions = {
		  scaleShowVerticalLines: false,
		  responsive: true
	  };

	  this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	  this.barChartType = 'bar';
	  this.barChartLegend = true;
	  this.barChartData = [
		  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
		  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
	  ];

	  this.barChartColors = [
		  {
			  backgroundColor: '#fc8b37',
			  borderColor: '#fc8b37',
			  pointBackgroundColor: '#fc8b37',
			  pointBorderColor: '#fc8b37',
			  pointHoverBackgroundColor: '#fc8b37',
			  pointHoverBorderColor: '#fc8b37'
		  },
		  {
			  backgroundColor: '#7cdb86',
			  borderColor: '#7cdb86',
			  pointBackgroundColor: '#7cdb86',
			  pointBorderColor: '#7cdb86',
			  pointHoverBackgroundColor: '#7cdb86',
			  pointHoverBorderColor: '#7cdb86'
		  }
	  ];
  }

  setDoughnutChart() {
	  this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	  this.doughnutChartData = [350, 450, 100];
	  this.doughnutChartType = 'doughnut';
	  this.doughnutChartColors = [
		  { backgroundColor: ['#805aff', '#fc8b37', '#2fa7ff'] },
		  { borderColor: ['#805aff', '#fc8b37', '#2fa7ff'] }
	  ];
  }

	setRadarChart() {
		this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

		this.radarChartData = [
			{ data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
			{ data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
		];

		this.radarChartType = 'radar';
	}

	setPieChart() {
		this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];

		this.pieChartData = [300, 500, 100];

		this.pieChartType = 'pie';

		this.pieChartColors = [
			{ backgroundColor: ['#2fa7ff', '#7cdb86', '#805aff'] },
			{ borderColor: ['#2fa7ff', '#7cdb86', '#805aff'] }
		];
	}

	setPolarAreaChart() {
		this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Corporate Sales'];

		this.polarAreaChartData = [300, 500, 100, 120];

		this.polarAreaChartType = 'polarArea';

		this.polarAreaChartLegend = true;

		this.polarAreaChartColors = [
			{ backgroundColor: ['#f741b5', '#2fa7ff', '#7cdb86', '#fc8b37'] },
			{ borderColor: ['#f741b5', '#2fa7ff', '#7cdb86', '#fc8b37'] }
		];
	}
}

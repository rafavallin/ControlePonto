import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzMessageModule } from 'ng-zorro-antd';

import { DeleteOutline } from '@ant-design/icons-angular/icons';

const icons = [ DeleteOutline ];

import { NZ_I18N, NZ_ICONS, en_US, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';

export function hljsLanguages() {
  return [{ name: 'xml', func: xml }];
}

import { UIModule } from '../ui/ui.module';
import { LayoutModule } from '../layout/layout.module';
import { BasePageComponent } from './base-page';

import { PageAnalyticsComponent } from './dashboards/analytics';
import { PageButtonsComponent } from './ui/components/buttons';
import { PageSwitchersComponent } from './ui/components/switchers';
import { PageInputsComponent } from './ui/components/inputs';
import { PageSimpleTablesComponent } from './ui/tables/simple-tables';
import { PageSortingTableComponent } from './ui/tables/sorting-table';
import { PageSearchTableComponent } from './ui/tables/search-table';
import { PageFilterTableComponent } from './ui/tables/filter-table';
import { PagePaginationTableComponent } from './ui/tables/pagination-table';
import { PageFormElementsComponent } from './ui/forms/form-elements';
import { PageFormLayoutsComponent } from './ui/forms/form-layouts';
import { PageFormValidationComponent } from './ui/forms/form-validation';
import { PageGoogleMapsComponent } from './ui/maps/google-maps';
import { PageWorldMapComponent } from './ui/maps/world-map';
import { PageTypographyComponent } from './ui/typography';
import { PageIconsOptionsComponent } from './ui/icons/icons-options';
import { PageIconsIfComponent } from './ui/icons/icons-if';
import { PageIconsSliComponent } from './ui/icons/icons-sli';
import { Page404Component } from './errors/page-404';
import { Page500Component } from './errors/page-500';
import { Page503Component } from './errors/page-503';
import { Page505Component } from './errors/page-505';
import { PageLeafletMapsComponent } from './ui/maps/leaflet-maps';
import { PageInvoiceComponent } from './apps/service-pages/invoice';
import { PageInvoicesComponent } from './apps/service-pages/invoices';
import { PagePricingComponent } from './apps/service-pages/pricing';
import { PageTimelineComponent } from './apps/service-pages/timeline';
import { PageUserProfileComponent } from './apps/user-pages/user-profile';
import { PageEditAccountComponent } from './apps/user-pages/edit-account';
import { PageCalendarComponent } from './apps/service-pages/calendar';
import { PageSignInComponent } from './apps/authentication/sign-in';
import { PageSignUpComponent } from './apps/authentication/sign-up';
import { PageSettingsComponent } from './settings';
import { PageCardsComponent } from './ui/components/cards';
import { PageListsComponent } from './ui/components/lists';
import { PageSelectsComponent } from './ui/components/selects';
import { PageAutocompletesComponent } from './ui/components/autocompletes';
import { PageTextareasComponent } from './ui/components/textareas';
import { PageAlertsComponent } from './ui/components/alerts';
import { PageRadioButtonsComponent } from './ui/components/radio-buttons';
import { PageNg2ChartsComponent } from './ui/charts/ng2-charts';
import { PageNgxChartsComponent } from './ui/charts/ngx-charts';
import { PageNgxEchartsComponent } from './ui/charts/ngx-echarts';
import { PageBadgesComponent } from './ui/components/badges';
import { PageProgressComponent } from './ui/components/progresses';
import { PageCheckboxesComponent } from './ui/components/checkboxes';
import { PageCircleProgressesComponent } from './ui/components/circle-progresses';
import { PageRatingsComponent } from './ui/components/ratings';
import { PageECommerceComponent } from './dashboards/e-commerce';
import { PageDashboardComponent } from './dashboards/dashboard';
import { PageAvatarsComponent } from './ui/components/avatars';
import { PageDropdownsComponent } from './ui/components/dropdowns';
import { PageModalWindowsComponent } from './ui/components/modal-windows';
import { PageResetPasswordComponent } from './apps/authentication/reset-password';
import { PageVerifyAccountComponent } from './apps/authentication/verify-account';
import { PageConnectionsComponent } from './apps/user-pages/connections';
import { ErrorBasePageComponent } from './errors/error-base-page';
import { PageWidgetsComponent } from './widgets';
import { PageGroupsComponent } from './apps/user-pages/groups';
import { PageDatePickerComponent } from './ui/forms/date-picker';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PageSliderComponent } from './ui/forms/slider';
import { PageUploadComponent } from './ui/forms/upload';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    NgxChartsModule,
    NgxEchartsModule,
    NzMessageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbIFQ5ffgouATqs-sp8hgQf3zV4dTLzaU',
    }),
    LeafletModule,
    NgZorroAntdModule,
    HighlightModule.forRoot({ languages: hljsLanguages }),
    FullCalendarModule,
    UIModule,
    LayoutModule,
  ],
  declarations: [
    BasePageComponent,
    PageAnalyticsComponent,
    PageButtonsComponent,
    PageInputsComponent,
    PageSwitchersComponent,
    PageBadgesComponent,
    PageSimpleTablesComponent,
    PageSortingTableComponent,
    PageSearchTableComponent,
    PageFilterTableComponent,
    PagePaginationTableComponent,
    PageFormElementsComponent,
    PageFormLayoutsComponent,
    PageFormValidationComponent,
    PageGoogleMapsComponent,
    PageWorldMapComponent,
    PageIconsOptionsComponent,
    PageIconsIfComponent,
    PageIconsSliComponent,
    Page404Component,
    Page500Component,
    Page503Component,
    Page505Component,
    PageLeafletMapsComponent,
    PageInvoiceComponent,
    PageInvoicesComponent,
    PagePricingComponent,
    PageTimelineComponent,
    PageUserProfileComponent,
    PageEditAccountComponent,
    PageCalendarComponent,
    PageSignInComponent,
    PageTypographyComponent,
    PageSignUpComponent,
    PageSettingsComponent,
    PageCardsComponent,
    PageListsComponent,
    PageSelectsComponent,
    PageAutocompletesComponent,
    PageTextareasComponent,
    PageAlertsComponent,
    PageProgressComponent,
    PageCheckboxesComponent,
    PageCircleProgressesComponent,
    PageRadioButtonsComponent,
    PageRatingsComponent,
    PageECommerceComponent,
    PageDashboardComponent,
    PageAvatarsComponent,
    PageNg2ChartsComponent,
    PageNgxChartsComponent,
    PageNgxEchartsComponent,
    PageDropdownsComponent,
    PageModalWindowsComponent,
    PageResetPasswordComponent,
    PageVerifyAccountComponent,
    PageConnectionsComponent,
    ErrorBasePageComponent,
    PageWidgetsComponent,
    PageGroupsComponent,
    PageDatePickerComponent,
    PageSliderComponent,
    PageUploadComponent,
  ],
  providers   : [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 300000, nzMaxStack: 7, nzPauseOnHover: true, nzAnimate: true}} ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
import { HorizontalLayoutComponent } from '../layout/horizontal';
import { PublicLayoutComponent } from '../layout/public';
import { ErrorLayoutComponent } from '../layout/error';

import { PageAnalyticsComponent } from '../pages/dashboards/analytics';
import { PageButtonsComponent } from '../pages/ui/components/buttons';
import { PageInputsComponent } from '../pages/ui/components/inputs';
import { PageSimpleTablesComponent } from '../pages/ui/tables/simple-tables';
import { PageSortingTableComponent } from '../pages/ui/tables/sorting-table';
import { PageSearchTableComponent } from '../pages/ui/tables/search-table';
import { PageFilterTableComponent } from '../pages/ui/tables/filter-table';
import { PagePaginationTableComponent } from '../pages/ui/tables/pagination-table';
import { PageFormElementsComponent } from '../pages/ui/forms/form-elements';
import { PageFormLayoutsComponent } from '../pages/ui/forms/form-layouts';
import { PageFormValidationComponent } from '../pages/ui/forms/form-validation';
import { PageIconsOptionsComponent } from '../pages/ui/icons/icons-options';
import { PageIconsIfComponent } from '../pages/ui/icons/icons-if';
import { PageIconsSliComponent } from '../pages/ui/icons/icons-sli';
import { Page404Component } from '../pages/errors/page-404';
import { Page500Component } from '../pages/errors/page-500';
import { Page503Component } from '../pages/errors/page-503';
import { Page505Component } from '../pages/errors/page-505';
import { PageNg2ChartsComponent } from '../pages/ui/charts/ng2-charts';
import { PageNgxChartsComponent } from '../pages/ui/charts/ngx-charts';
import { PageNgxEchartsComponent } from '../pages/ui/charts/ngx-echarts';
import { PageLeafletMapsComponent } from '../pages/ui/maps/leaflet-maps';
import { PageInvoiceComponent } from '../pages/apps/service-pages/invoice';
import { PageInvoicesComponent } from '../pages/apps/service-pages/invoices';
import { PagePricingComponent } from '../pages/apps/service-pages/pricing';
import { PageTimelineComponent } from '../pages/apps/service-pages/timeline';
import { PageUserProfileComponent } from '../pages/apps/user-pages/user-profile';
import { PageEditAccountComponent } from '../pages/apps/user-pages/edit-account';
import { PageCalendarComponent } from '../pages/apps/service-pages/calendar';
import { PageSignInComponent } from '../pages/apps/authentication/sign-in';
import { PageSignUpComponent } from '../pages/apps/authentication/sign-up';
import { PageSettingsComponent } from '../pages/settings';
import { PageSwitchersComponent } from '../pages/ui/components/switchers';
import { PageCardsComponent } from '../pages/ui/components/cards';
import { PageListsComponent } from '../pages/ui/components/lists/lists.component';
import { PageSelectsComponent } from '../pages/ui/components/selects';
import { PageAutocompletesComponent } from '../pages/ui/components/autocompletes';
import { PageTextareasComponent } from '../pages/ui/components/textareas';
import { PageAlertsComponent } from '../pages/ui/components/alerts';
import { PageProgressComponent } from '../pages/ui/components/progresses';
import { PageBadgesComponent } from '../pages/ui/components/badges';
import { PageCheckboxesComponent } from '../pages/ui/components/checkboxes';
import { PageCircleProgressesComponent } from '../pages/ui/components/circle-progresses';
import { PageRadioButtonsComponent } from '../pages/ui/components/radio-buttons';
import { PageRatingsComponent } from '../pages/ui/components/ratings';
import { PageTypographyComponent } from '../pages/ui/typography';
import { PageWorldMapComponent } from '../pages/ui/maps/world-map';
import { PageGoogleMapsComponent } from '../pages/ui/maps/google-maps';
import { PageDashboardComponent } from '../pages/dashboards/dashboard';
import { PageAvatarsComponent } from '../pages/ui/components/avatars';
import { PageDropdownsComponent } from '../pages/ui/components/dropdowns';
import { PageModalWindowsComponent } from '../pages/ui/components/modal-windows';
import { PageECommerceComponent } from '../pages/dashboards/e-commerce';
import { PageResetPasswordComponent } from '../pages/apps/authentication/reset-password';
import { PageVerifyAccountComponent } from '../pages/apps/authentication/verify-account';
import { PageConnectionsComponent } from '../pages/apps/user-pages/connections';
import { PageGroupsComponent } from '../pages/apps/user-pages/groups';
import { PageWidgetsComponent } from '../pages/widgets';
import { PageDatePickerComponent } from '../pages/ui/forms/date-picker';
import { PageUploadComponent } from '../pages/ui/forms/upload';
import { PageSliderComponent } from '../pages/ui/forms/slider';

const CHILD_ROUTES: Routes = [
  { path: 'alerts', component: PageAlertsComponent },
  { path: 'avatars', component: PageAvatarsComponent },
  { path: 'badges', component: PageBadgesComponent },
  { path: 'connections', component: PageConnectionsComponent },
  { path: 'ratings', component: PageRatingsComponent },
  { path: 'radio-buttons', component: PageRadioButtonsComponent },
  { path: 'circular-progresses', component: PageCircleProgressesComponent },
  { path: 'checkboxes', component: PageCheckboxesComponent },
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'dropdowns', component: PageDropdownsComponent },
  { path: 'modals', component: PageModalWindowsComponent },
  { path: 'buttons', component: PageButtonsComponent },
  { path: 'typography', component: PageTypographyComponent },
  { path: 'upload', component: PageUploadComponent },
  { path: 'slider', component: PageSliderComponent },
  { path: 'cards', component: PageCardsComponent },
  { path: 'inputs', component: PageInputsComponent },
  { path: 'switchers', component: PageSwitchersComponent },
  { path: 'lists', component: PageListsComponent },
  { path: 'selects', component: PageSelectsComponent },
  { path: 'autocompletes', component: PageAutocompletesComponent },
  { path: 'textareas', component: PageTextareasComponent },
  { path: 'google-map', component: PageGoogleMapsComponent },
  { path: 'ng2-charts', component: PageNg2ChartsComponent },
  { path: 'ngx-charts', component: PageNgxChartsComponent },
  { path: 'ngx-echarts', component: PageNgxEchartsComponent },
  { path: 'world-map', component: PageWorldMapComponent },
  { path: 'simple-table', component: PageSimpleTablesComponent },
  { path: 'sorting-table', component: PageSortingTableComponent },
  { path: 'analytics', component: PageAnalyticsComponent },
  { path: 'search-table', component: PageSearchTableComponent },
  { path: 'filtering-table', component: PageFilterTableComponent },
  { path: 'pagination-table', component: PagePaginationTableComponent },
  { path: 'progresses', component: PageProgressComponent },
  { path: 'form-elements', component: PageFormElementsComponent },
  { path: 'form-layout', component: PageFormLayoutsComponent },
  { path: 'form-validation', component: PageFormValidationComponent },
  { path: 'leaflet-map', component: PageLeafletMapsComponent },
  { path: 'icons-options', component: PageIconsOptionsComponent },
  { path: 'icons-if', component: PageIconsIfComponent },
  { path: 'icons-sli', component: PageIconsSliComponent },
  { path: 'invoice', component: PageInvoiceComponent },
  { path: 'invoices', component: PageInvoicesComponent },
  { path: 'pricing', component: PagePricingComponent },
  { path: 'events-timeline', component: PageTimelineComponent },
  { path: 'user-profile', component: PageUserProfileComponent },
  { path: 'edit-account', component: PageEditAccountComponent },
  { path: 'events-calendar', component: PageCalendarComponent },
  { path: 'settings', component: PageSettingsComponent },
  { path: 'e-commerce', component: PageECommerceComponent },
  { path: 'widgets', component: PageWidgetsComponent },
  { path: 'groups', component: PageGroupsComponent },
  { path: 'date-picker', component: PageDatePickerComponent }
];

const PUBLIC_ROUTES: Routes = [
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'forgot-password', component: PageResetPasswordComponent },
  { path: 'verify-account', component: PageVerifyAccountComponent },
  { path: '**', component: Page404Component }
];

const ERROR_ROUTES: Routes = [
  { path: '404', component: Page404Component },
  { path: '500', component: Page500Component },
  { path: '503', component: Page503Component },
  { path: '505', component: Page505Component },
  { path: '**', component: Page404Component }
];

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/vertical/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'vertical',
    component: VerticalLayoutComponent,
    children: CHILD_ROUTES
  },
  {
    path: 'horizontal',
    component: HorizontalLayoutComponent,
    children: CHILD_ROUTES
  },
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: 'error',
    component: ErrorLayoutComponent,
    children: ERROR_ROUTES
  },
  {
    path: '**',
    component: ErrorLayoutComponent,
    children: ERROR_ROUTES
  }
];

@NgModule({
  imports: [],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }

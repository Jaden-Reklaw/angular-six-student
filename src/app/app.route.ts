import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ExpandingPanelComponent } from './expanding-panel/expanding-panel.component';

import { NavComponent } from './nav/nav.component';
import { ReactivejsComponent } from './reactivejs/reactivejs.component';



export const router: Routes = [
    {path: '',redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'nav', component: NavComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'datepicker', component: DatePickerComponent},
    {path: 'panel', component: ExpandingPanelComponent},
    {path: 'reactive', component: ReactivejsComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
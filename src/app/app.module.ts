import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//My Components
import { ExpandingPanelComponent } from './expanding-panel/expanding-panel.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LayoutModule } from '@angular/cdk/layout';

//Import material Modules
import{ MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { routes } from './app.route';
import { ReactivejsComponent } from './reactivejs/reactivejs.component';

// import {
//   MatInputModule,
//   MatToolbarModule,
//   MatButtonModule,
//   MatSidenavModule,
//   MatIconModule,
//   MatListModule,
//   MatGridListModule,
//   MatCardModule,
//   MatMenuModule,
//   MatTableModule,
//   MatPaginatorModule,
//   MatSortModule,
//   MatExpansionModule,
//   MatDatepickerModule,
//   MatNativeDateModule
// } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ExpandingPanelComponent,
    DatePickerComponent,
    ReactivejsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

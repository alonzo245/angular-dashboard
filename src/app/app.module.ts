import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureComponent } from './dashboard/feature/feature.component';
import { RowTwoValuesFeatureComponent } from './dashboard/feature/row-two-values-feature/row-two-values-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FeatureComponent,
    RowTwoValuesFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

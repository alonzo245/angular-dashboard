import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureComponent } from './dashboard/feature/feature.component';
import { RowTwoValuesFeatureComponent } from './dashboard/feature/row-two-values-feature/row-two-values-feature.component';
import { GraphFeatureComponent } from './dashboard/feature/graph-feature/graph-feature.component';
import { RowTreeValuesFeatureComponent } from './dashboard/feature/row-tree-values-feature/row-tree-values-feature.component';
import { ProgressBarComponent } from './dashboard/feature/progress-bar/progress-bar.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FeatureComponent,
    RowTwoValuesFeatureComponent,
    GraphFeatureComponent,
    RowTreeValuesFeatureComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

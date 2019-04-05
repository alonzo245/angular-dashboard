import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoxComponent } from './box/box.component';
import { BoxTitleComponent } from './box/box-title/box-title.component';
import { BoxRowItemComponent } from './box/box-row-item/box-row-item.component';
import { BoxProgressComponent } from './box/box-progress/box-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoxComponent,
    BoxTitleComponent,
    BoxRowItemComponent,
    BoxProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

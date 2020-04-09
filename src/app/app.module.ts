import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CanadaTableComponent } from './canada-table/canada-table.component';
import {CanadaDataService} from './CanadaDataService';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CanadaTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CanadaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

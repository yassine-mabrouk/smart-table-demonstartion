import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { SmartTableService } from './servises/smart-table.service';
import { SmartTableData } from './servises/smart-table';

@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent
  ],
  imports: [

  BrowserModule,
    Ng2SmartTableModule
  ],
  providers: [SmartTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }

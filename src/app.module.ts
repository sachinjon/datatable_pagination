import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule,MatPaginatorModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination'
//import { MdTableModule,MdPaginatorModule } from '@angular/material';
//import {CdkPaginatorModule,CdkDataTable} from '@angular/material';
//import {DataSource} from '@angular/cdk';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,MatTableModule,MatPaginatorModule,NgxPaginationModule,FormsModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //npm install --save @angular/material @angular/cdk
  //npm install ngx-pagination --save
}

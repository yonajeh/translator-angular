import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MyAppComponent } from './my-app/my-app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import {NgbModule, NgbNav} from '@ng-bootstrap/ng-bootstrap';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap/nav/nav.module";

@NgModule({
  declarations: [
    MyAppComponent,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [MyAppComponent, MyHeaderComponent]
})
export class AppModule { }

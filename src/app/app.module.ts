import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MyAppComponent } from './my-app/my-app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import {NgbModule, NgbNav} from '@ng-bootstrap/ng-bootstrap';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap/nav/nav.module";
import { MyContentComponent } from './my-content/my-content.component';
import { SelectLangComponent } from './select-lang/select-lang.component';

@NgModule({
  declarations: [
    MyAppComponent,
    MyHeaderComponent,
    MyContentComponent,
    SelectLangComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [MyAppComponent]
})
export class AppModule { }

import { routing } from './app.routing';
import { AlertService } from './services/alert.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // ng-bootstrap
import { MaterialModule } from '@angular/material'; // google material design for angular
import { MessageDialogComponent } from './shared/message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    MessageDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // for reactive forms
    HttpModule,
    routing,
    NgbModule.forRoot(), // ng-bootstrap
    MaterialModule.forRoot(), // google material design for angular
  ],
  providers: [
    AlertService,
  ],
  entryComponents: [
    MessageDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddressListComponent } from './address-list/address-list.component';

import { WhitelistService } from './whitelist.service';
import { WhitelistAddComponent } from './whitelist-add/whitelist-add.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    WhitelistAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WhitelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

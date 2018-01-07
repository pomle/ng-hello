import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddressListComponent } from './address-list/address-list.component';

import { WhitelistService } from './whitelist.service';


@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WhitelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

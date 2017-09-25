import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersService } from './_services/users.service';
import { BikesService } from './_services/bikes.service';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { BikeListComponent } from './browse/bike-list/bike-list.component';
import { BikeComponent } from './browse/bike-list/bike/bike.component';
import { MyListingsComponent } from './my-listings/my-listings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowseComponent,
    BikeListComponent,
    BikeComponent,
    MyListingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService,BikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

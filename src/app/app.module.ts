import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './amaa/login/login.component';
import { HomeComponent } from './amaa/home/home.component';
import { TableComponent } from './amaa/table/table.component';
import { ElectronicdevicesComponent } from './amaa/electronicdevices/electronicdevices.component';
import { LandAndBuildingComponent } from './amaa/land-and-building/land-and-building.component';
import { MechanicsComponent } from './amaa/mechanics/mechanics.component';
import { SportGoodsComponent } from './amaa/sport-goods/sport-goods.component';
import { NavbarComponent } from './amaa/navbar/navbar.component';
import { AdministratorComponent } from './Admin/administrator/administrator.component';
import { ViewAdvertiseComponent } from './Admin/view-advertise/view-advertise.component';
import { AdvertiseComponent } from './Admin/advertise/advertise.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { ViewUserComponent } from './Admin/view-user/view-user.component';
import { AddPhotoComponent } from './Admin/add-photo/add-photo.component';
import { ViewPhotoComponent } from './Admin/view-photo/view-photo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './Admin/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TableComponent,
    ElectronicdevicesComponent,
    LandAndBuildingComponent,
    MechanicsComponent,
    SportGoodsComponent,
    NavbarComponent,
    AdministratorComponent,
    ViewAdvertiseComponent,
    AdvertiseComponent,
    AddUserComponent,
    ViewUserComponent,
    AddPhotoComponent,
    ViewPhotoComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

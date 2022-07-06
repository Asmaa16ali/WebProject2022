import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhotoComponent } from './Admin/add-photo/add-photo.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { AdministratorComponent } from './Admin/administrator/administrator.component';
import { AdvertiseComponent } from './Admin/advertise/advertise.component';
import { CategoriesComponent } from './Admin/categories/categories.component';
import { ViewAdvertiseComponent } from './Admin/view-advertise/view-advertise.component';
import { ViewPhotoComponent } from './Admin/view-photo/view-photo.component';
import { ViewUserComponent } from './Admin/view-user/view-user.component';
import { ElectronicdevicesComponent } from './amaa/electronicdevices/electronicdevices.component';
import { HomeComponent } from './amaa/home/home.component';
import { LandAndBuildingComponent } from './amaa/land-and-building/land-and-building.component';
import { MechanicsComponent } from './amaa/mechanics/mechanics.component';
import { NavbarComponent } from './amaa/navbar/navbar.component';
import { SportGoodsComponent } from './amaa/sport-goods/sport-goods.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'electrodevice', component:ElectronicdevicesComponent},
    {path:'landandbuilding', component:LandAndBuildingComponent},
    {path:'mechanics',component:MechanicsComponent},
    {path:'sportgoods',component:SportGoodsComponent}
    
  ]},
  {path:"admin",component:AdministratorComponent},
  {path:"viewAdvatise",component:ViewAdvertiseComponent},
  {path:"Advertise",component:AdvertiseComponent},
  {path:"AddUser",component:AddUserComponent},
  {path:"viewUser",component:ViewUserComponent},
  {path:"addPhoto",component:AddPhotoComponent},
  {path:"viewPhoto",component:ViewPhotoComponent},
  {path:"categories",component:CategoriesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

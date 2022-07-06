import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from 'src/app/services/advertise.service';

@Component({
  selector: 'app-view-advertise',
  templateUrl: './view-advertise.component.html',
  styleUrls: ['./view-advertise.component.scss']
})
export class ViewAdvertiseComponent implements OnInit {
  advertisements:any
  constructor(private advertiseservice:AdvertiseService) { }

  ngOnInit(): void {
    this.getAdvertise()
  }

  getAdvertise(){
    this.advertiseservice.getAdvertise().subscribe((response:any)=>{
      this.advertisements = response
    })
  }
}

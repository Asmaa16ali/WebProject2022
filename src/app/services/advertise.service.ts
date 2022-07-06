import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  constructor(private http:HttpClient) { }

  addAdvertise(Advertise:any){
    return this.http.post("http://localhost:8080/advertise/post",Advertise)
  }

  getAdvertise(){
    return this.http.get("http://localhost:8080/advertise/get")
  }
}

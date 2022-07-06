import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  addCategories(Categories:any){
    return this.http.post("http://localhost:8080/categories/post",Categories)
  }
}

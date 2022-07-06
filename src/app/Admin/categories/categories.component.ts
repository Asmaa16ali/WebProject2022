import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesForm!:FormGroup

  constructor(private categoriesservice:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesComfig()
  }

  categoriesComfig(){
    this.categoriesForm = new FormGroup({
    id:new FormControl(null),
    category_name:new FormControl(null,Validators.required),
    description:new FormControl(null,Validators.required),
    })
  }

  submit(){
    console.log(this.categoriesForm.value)
    this.categoriesservice.addCategories(this.categoriesForm.value).subscribe((res:any)=>{

    })
  }
}

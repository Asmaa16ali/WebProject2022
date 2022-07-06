import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdvertiseService } from 'src/app/services/advertise.service';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {
  advertiseForm!:FormGroup
  selectedFile:any
  constructor(private advertiseservice:AdvertiseService) { }

  ngOnInit(): void {
    this.advertiseFormComfig()
    
  }
  onFileChanged(event:any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.selectedFile = file
      console.log(this.selectedFile)
    } 
  }

  advertiseFormComfig(){
    this.advertiseForm = new FormGroup({
     id:new FormControl(null),
    tittle:new FormControl(null,Validators.required),
    details:new FormControl(null,Validators.required),
    categories:new FormControl(null,Validators.required),
    image:new FormControl(null,Validators.required),
    })
  }

  submit(){
      console.log(this.advertiseForm.value)
     var values = new FormData()
     values.append('tittle',this.advertiseForm.value.tittle)
     values.append('details',this.advertiseForm.value.details)
     values.append('categories',this.advertiseForm.value.categories)
     values.append('image',this.selectedFile)
      this.advertiseservice.addAdvertise(values).subscribe((res:any)=>{

      })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm!:FormGroup
  constructor(private usersevice:UserService) { }

  ngOnInit(): void {
    this.userFormConfig()
  }

  userFormConfig(){
    this.userForm = new FormGroup({
      id:new FormControl(null),
      full_name:new FormControl(null,Validators.required),
      phone_number:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      address:new FormControl(null,Validators.required),
      gender:new FormControl(null,Validators.required),
      user_name:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
    })
  }
  submit(){
    console.log(this.userForm.value)
    this.usersevice.addUser(this.userForm.value).subscribe((res:any)=>{

    })
  }
 
  }

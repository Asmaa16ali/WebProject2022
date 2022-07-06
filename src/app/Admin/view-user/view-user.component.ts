import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  Users:any
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.UserService.getUsers().subscribe((response:any)=>{
      this.Users = response
    })
  }

}

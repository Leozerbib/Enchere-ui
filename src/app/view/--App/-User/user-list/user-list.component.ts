import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user/user';
import { UserServiceService } from '../../../../---Services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {

  User!: User[];

  constructor(private userService: UserServiceService) {
  }

  
  }

import { Component, Input, OnInit } from '@angular/core';
import { UserControler } from 'src/app/---Controler/user';
import { User } from 'src/app/model/user/user';
import { UserDto } from 'src/app/model/user/userDto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  
  @Input() userdto!: UserDto;
  

  constructor(){}



  ngOnInit() {

  }
}

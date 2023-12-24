import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from 'src/app/model/user/userDto';
import { UserReturnDto } from 'src/app/model/user/userDtoReturn';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit{
  @Input() userdto!: UserReturnDto;

  constructor(){

  }
  ngOnInit(): void {
    
  }
  

}

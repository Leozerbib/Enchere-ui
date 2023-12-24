import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserControler } from 'src/app/---Controler/user';
import { User } from 'src/app/model/user/user';
import { UserDto } from 'src/app/model/user/userDto';
import { UserServiceService } from 'src/app/---Services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  userdto!:UserDto
  constructor(private userServices :UserServiceService){}
  

  ngOnInit() {
    
    console.log("544546545664")
    this.userdto = this.getUserByUsername("fuck")
    console.log(this.userdto.age)
  }



  public getUserByUsername(username: string): UserDto { 
        
    this.userServices.getUserByUsername(username).subscribe(
      (response: UserDto) =>{
        console.log(response)
        this.userdto = response;
        console.log(this.userdto);
        return this.userdto
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    );
    
    return this.userdto
  }


}

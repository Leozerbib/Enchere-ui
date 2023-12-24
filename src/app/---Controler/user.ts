import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/model/user/user';
import { UserDto } from 'src/app/model/user/userDto';
import { UserServiceService } from 'src/app/---Services/user-service.service';


@Injectable({
    providedIn: 'root'
  })
export class UserControler{
    public user!: User;
    public userdto!: UserDto;
    constructor(private userService: UserServiceService){}

    public getUserById(username: string):any {
        this.userService.getUserByid(username).subscribe(
          (response: any) =>{
            if (response instanceof Object){
              this.userdto = response;
            }
            return this.userdto;
          },
          (error: HttpErrorResponse) => {
            alert(error.message)
            
          }
        ) 
      }
    
      public getUserByUsername(username: string): UserDto { 
        
        this.userService.getUserByUsername(username).subscribe(
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
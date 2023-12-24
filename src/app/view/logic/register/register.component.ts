import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    user_id:number=0;
    names:string ="";
    lastname:string ="";
    username:string ="";
    age:number=0;
    email:string ="";
    passwords:string ="";
    @Input() idteam!:number;
constructor(private http: HttpClient){

}

save(){
  let bodyData= {
    "user_id":0,
    "names": this.names,
    "lastname": this.lastname,
    "username": this.username,
    "age": this.age,
    "email":this.email,
    "passwords":this.passwords,
  
  };
  print()
  this.http.post("http://localhost:8090/Bibz/save",bodyData,{responseType:'text'}).subscribe((resultData: any)=>{
    console.log(resultData);
    alert("User Register Successfuly");
  });
}

}

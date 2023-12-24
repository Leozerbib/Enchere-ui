import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamDtoRestricted } from 'src/app/model/team/teamDtoRestricted';
import { UserReturnDto } from 'src/app/model/user/userDtoReturn';

@Component({
  selector: 'app-login-team',
  templateUrl: './login-team.component.html',
  styleUrls: ['./login-team.component.css']
})
export class LoginTeamComponent {
  name: string = "";
  pwd: string = "";
  User!: UserReturnDto;
  Users!: UserReturnDto[];
  Team!: TeamDtoRestricted;
  @Input() teams!: TeamDtoRestricted[]
  @Input() modal!: NgbActiveModal;
  constructor( private http: HttpClient, private modalService: NgbModal) {
    
  }

  save() {
    console.log(this.name);
    console.log(this.pwd);
    let bodyData = {
      "name": this.name,
      "pwd": this.pwd,
    };

    this.http.post("http://localhost:8090/Bibz/Team/login", bodyData, { responseType: 'json' }).subscribe(
      (resultData:any) => {
      
      if (resultData instanceof Object) {
      
        //this.mapdataToUSerReturn(resultData)
        this.Team=resultData;
        console.log(this.Team)
        this.teams.push(this.Team)
        console.log(this.teams)
        this.modal.close()
        
      }},

      (error) => {
      if (error.HttpStatusCode =406) {
        alert("User Login Failed, wrong password");
      }
      else {
        alert(error);
      }

    });
  }



}

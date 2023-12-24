import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageComponent } from '../../--App/-User/user-page/user-page.component';
import { Team } from 'src/app/model/team/team';
import { TeamDtoRestricted } from 'src/app/model/team/teamDtoRestricted';
import { TeamComponent } from '../../--App/-Team/team/team.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'src/app/---Services/team.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailOrUsername: string = "";
  passwords: string = "";

  @Input() team!: TeamDtoRestricted;
  @Input() idteam!:number;
  @Input() modal!: NgbActiveModal;
  constructor(private router: Router, private http: HttpClient, private modalService: NgbModal,private teamService:TeamService) {
  }

  save() {
    console.log(this.emailOrUsername);
    console.log(this.passwords);
    let bodyData = {
      "idteam":this.idteam,
      "username": this.emailOrUsername,
      "passwords": this.passwords,
    };

    this.http.post("http://localhost:8090/Bibz/Team/addUser", bodyData, { responseType: 'json' }).subscribe(
      (resultData:any) => {
      
      if (resultData instanceof Object) {
        alert(resultData.id)
        this.modal.close()
        
      }},

      (error) => {
      if (error.HttpStatusCode ===406) {
        alert("User Login Failed, wrong password");
      }
      else {
        alert(error);
      }

    });
  }

}

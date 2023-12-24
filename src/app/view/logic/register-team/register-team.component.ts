import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamDtoRestricted } from 'src/app/model/team/teamDtoRestricted';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent {
  name:string ="";
  pwd:string ="";
  team!: TeamDtoRestricted
  @Input() teams!: TeamDtoRestricted[]
  @Input() modal!: NgbActiveModal;
constructor(private http: HttpClient){

}


  save(){
    let bodyData= {
      "name": this.name,
      "pwd":this.pwd,
    
    };
    
    this.http.post("http://localhost:8090/Bibz/Team/create",bodyData,{responseType:'json'}).subscribe((resultData: any)=>{
      console.log(resultData);
      this.team=resultData
      console.log(this.team)
      this.teams.push(this.team)
      console.log(this.teams)
      this.modal.close()
      alert("User Register Successfuly");
    });
  }
}

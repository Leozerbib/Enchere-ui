import { HttpClient } from '@angular/common/http';
import { ApplicationModule, ApplicationRef, Component,Input,OnInit,TemplateRef } from '@angular/core';
import { NgbModal, NgbModalModule,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'src/app/---Services/team.service';
import { TeamDto } from 'src/app/model/team/teamDto';
import { TeamDtoRestricted } from 'src/app/model/team/teamDtoRestricted';
import { User } from 'src/app/model/user/user';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],

})
export class TeamComponent implements OnInit{
  public UserTeam!: User[]

  @Input() team!: TeamDtoRestricted;
  constructor(private modalService: NgbModal,private http:HttpClient,private teamService: TeamService){

  } 

  

  openVerticallyCentered(content: TemplateRef<any>) {
    
		this.modalService.open(content, { size: 'lg',centered: true }).result.then(
      (result) => {
        this.fetchTeamData()
        console.log(`Closed with: ${result}`);
      },
      (reason) => {
        this.fetchTeamData()
        console.log(`Dismissed ${reason}`);
      }
    );
	}


  ngOnInit(): void {
    console.log("je suis la")
  }

  fetchTeamData() {
    const teamId = this.team.id; // Replace with the actual team ID
    this.teamService.findTeamById(teamId).subscribe(
      (resultTeam) => {
        this.team = resultTeam;
      },
      (error) => {
        console.error('Error fetching team data:', error);
      }
    );
  }

}



import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from 'src/app/model/team/team';
import { TeamDtoRestricted } from 'src/app/model/team/teamDtoRestricted';

@Component({
  selector: 'app-bloc-team',
  templateUrl: './bloc-team.component.html',
  styleUrls: ['./bloc-team.component.css']
})
export class BlocTeamComponent implements OnInit{
  team!: Team;
  teams: TeamDtoRestricted[] = [];

  constructor(private modalService: NgbModal){}
  ngOnInit(): void {
      
  }

  

  openVerticallyCentered(content: TemplateRef<any>) {
    
		this.modalService.open(content, { size: 'lg',centered: true }).result.then(
      (result) => {
        // Handle modal close (if needed)
        console.log(`Closed with: ${result}`);
      },
      (reason) => {
        // Handle modal dismiss
        console.log(`Dismissed ${reason}`);
      }
    );
	}

}

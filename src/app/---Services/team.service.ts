import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Team } from '../model/team/team';
import { TeamDtoRestricted } from '../model/team/teamDtoRestricted';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team !: TeamDtoRestricted
  private apiServerUrl = 'http://localhost:8090/Bibz/Team'

  constructor(private http: HttpClient) {

  }
 
 /**
  * Search customer by email
  * @param name
  */
 getTeamByName(name: string): Observable<any>{
  let params = new HttpParams().set('name',"Squad");
  console.log("oui")
  return  this.http.get<any>(`${this.apiServerUrl}/get/findTeamByName`,{responseType: 'json',params});
}
  
getUserByid(username: string): Observable<any>{
  
  return  this.http.get<any>(`http://localhost:8090/Bibz/User/searchByUsername` );
}

findTeamById(teamId: number) : Observable<TeamDtoRestricted>{
  return this.http.get<TeamDtoRestricted>(`${this.apiServerUrl}/get/findTeam/${teamId}`, { responseType: 'json' }
  );
}
}

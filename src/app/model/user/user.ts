import { Timestamp } from "rxjs";
import { Team } from "../team/team";

export interface User{
    id : number;
    names : string;
    lastname : string;
    username : string;
    age : number;
    date_crea : Date;
    last_co : Date;
    email:string;
    passwords:string;
    team: Array<Team>;

}
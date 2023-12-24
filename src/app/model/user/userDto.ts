import { Timestamp } from "rxjs";
import { Team } from "../team/team";

export interface UserDto{
    id : number;
    names : string;
    lastname : string;
    username : string;
    age : number;
    date_crea : Date;
    last_co : Date;
    email:string;
    passwords:string;
}
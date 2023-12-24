import { UserReturnDto } from "../user/userDtoReturn";

export interface TeamDtoRestricted{
    id: number;
    name: string;
    nbr_user: number;
    date_crea: Date;
    users: UserReturnDto[];

}
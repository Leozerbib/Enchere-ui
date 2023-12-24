import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { User } from '../model/user/user';
import { UserDto } from '../model/user/userDto';
//import { UserDtoReturn } from '../model/user/userDtoReturn';
//import { UserDtoRestricted } from '../model/user/userDtoRestricted';
//import { UserDtoTeamRequest } from '../model/user/userDtoTeamRequest';
//import { UserDtoLogin } from '../model/user/userDtoLogin';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiServerUrl = 'http://localhost:8090/Bibz'

  constructor(private http: HttpClient) {

  }
    /**
     * Save a new Customer object in the Backend server data base.
     * @param user
     */
    saveCustomer(user: UserDto): Observable<number>{
      return this.http.post<number>(`${this.apiServerUrl}/User/save`, user);
  }
     /**
      * Update an existing Customer object in the Backend server data base.
      * @param user
      */
     updateCustomer(user: UserDto): Observable<UserDto>{
      return this.http.put<UserDto>(`${this.apiServerUrl}/User/updateUser`, user);
  }
  
  /**
   * Delete an existing Customer object in the Backend server data base.
   * @param user
   */
   deleteCustomer(user : User): Observable<void>{
       return this.http.delete<void>(`${this.apiServerUrl}/User/deleteUser/${user.id}`);
   }
 
 /**
  * Search customer by email
  * @param username
  */
 getUserByUsername(username: string): Observable<any>{
  let params = new HttpParams().set('username',"fuck");
  console.log("oui")
  return  this.http.get<any>(`${this.apiServerUrl}/User/searchByUsername`,{responseType: 'json',params});
}
  
getUserByid(username: string): Observable<any>{
  
  return  this.http.get<any>(`http://localhost:8090/Bibz/User/searchByUsername` );
}


 


}

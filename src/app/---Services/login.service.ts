import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'Bibze'; // Remplacez par votre URL d'API

  constructor(private http:HttpClient) {}

  // Fonction pour effectuer une requête HTTP et récupérer uniquement le statut
  getUser(): Observable<number> {
    // Remplacez 'endpoint' par le chemin d'API approprié pour récupérer l'utilisateur
    return this.http.get<any>('votre_url_api/endpoint').pipe(
      map(response => response?.statusCode)
    );
  }
}

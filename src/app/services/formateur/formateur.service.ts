import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from 'src/app/shared/formateur';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }
  // get all Formateurs
  public getAllFormateurs(): Observable<Formateur[]>{
    return this.http.get<Formateur[]>(`${environment.apiUrl}/formateurs`);
  }



  public getFormateur(formateurId: number): Observable<Formateur[]>{
    return this.http.get<Formateur[]>(`${environment.apiUrl}/formateurs/${formateurId}`);
  }

  // Add One
  public addFormateur(formateur: Formateur): Observable<Formateur>{
    return this.http.post<Formateur>(`${environment.apiUrl}/formateurs`, formateur);
  }


  // Update One
  public updateFormateur(formateur: Formateur): Observable<Formateur>{
    return this.http.put<Formateur>(`${environment.apiUrl}/formateurs/${formateur.id}`, formateur);
  }


  // Delete One
  public deleteFormateur(formateurId: number): Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/formateurs/${formateurId}`);
  }
}

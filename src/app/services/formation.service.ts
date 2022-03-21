import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formation } from '../shared/formation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

   // get all Formations
   public getAllFormations(): Observable<Formation[]>{
    return this.http.get<Formation[]>(`${environment.apiUrl}/formations`);
  }



  public getFormation(formationId: number): Observable<Formation[]>{
    return this.http.get<Formation[]>(`${environment.apiUrl}/formations/${formationId}`);
  }

  // Add One
  public addFormation(formation: Formation): Observable<Formation>{
    return this.http.post<Formation>(`${environment.apiUrl}/formations`, formation);
  }


  // Update One
  public updateFormation(formation: Formation): Observable<Formation>{
    return this.http.put<Formation>(`${environment.apiUrl}/formations/${formation.id}`, formation);
  }


  // Delete One
  public deleteFormation(formationId: number): Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/formations/${formationId}`);
  }
}

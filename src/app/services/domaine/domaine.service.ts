import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/shared/domaine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http: HttpClient) { }
  // get all Domaines
  public getAllDomaines(): Observable<Domaine[]>{
    return this.http.get<Domaine[]>(`${environment.apiUrl}/domaines`);
  }



  public getDomaine(domaineId: number): Observable<Domaine[]>{
    return this.http.get<Domaine[]>(`${environment.apiUrl}/domaines/${domaineId}`);
  }

  // Add One
  public addDomaine(domaine: Domaine): Observable<Domaine>{
    return this.http.post<Domaine>(`${environment.apiUrl}/domaines`, domaine);
  }


  // Update One
  public updateDomaine(domaine: Domaine): Observable<Domaine>{
    return this.http.put<Domaine>(`${environment.apiUrl}/domaines/${domaine.id}`, domaine);
  }


  // Delete One
  public deleteDomaine(domaineId: number): Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/domaines/${domaineId}`);
  }
}

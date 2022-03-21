import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/services/domaine/domaine.service';
import { FormateurService } from 'src/app/services/formateur/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import { Domaine } from 'src/app/shared/domaine';
import { Formateur } from 'src/app/shared/formateur';
import { Formation } from 'src/app/shared/formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  formations: Formation[]=[]
  formateurs: Formateur[]=[]
  domaines: Domaine[]=[]
  constructor(private formationService: FormationService, private formateurService: FormateurService, private domaineService: DomaineService) { }


  ngOnInit(): void {
    this.getFormations();
    this.getAllFormateurs();
    this.getAllDomaines();
  }

  getFormations(){
    this.formationService.getAllFormations().subscribe(       
      (response: Formation[]) => {
       console.log(response)
         this.formations = response;          
      })
      
    return this.formations;
  }

  getAllFormateurs(){
    this.formateurService.getAllFormateurs().subscribe(
      (response: Formateur[]) => {
        this.formateurs=response
      }
    )
  }

  getAllDomaines(){
    this.domaineService.getAllDomaines().subscribe(
      (response: Domaine[]) => {
        this.domaines=response
      }
    )
  }

}

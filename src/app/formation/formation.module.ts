import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationRoutingModule } from './formation-routing.module';
import { formationComponent } from './formation.component';



@NgModule({
  declarations: [formationComponent],
  imports: [
    CommonModule,
    FormationRoutingModule
  ]
})
export class FormationModule { }

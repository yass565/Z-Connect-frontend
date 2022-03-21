import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationRoutingModule } from './formation-routing.module';
import { formationComponent } from './formation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    formationComponent,
    FormationListComponent, 
    FormationFormComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    HttpClientModule
  ]
})
export class FormationModule { }

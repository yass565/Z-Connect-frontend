import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationListComponent } from './formation-list/formation-list.component';

const routes: Routes = [
    {path: '', component: FormationListComponent},
    {path: 'new', component: FormationFormComponent, data: {isEdit: false}},
    {path: 'edit/:idFormation', component: FormationFormComponent, data: {isEdit: true}},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationRoutingModule { }

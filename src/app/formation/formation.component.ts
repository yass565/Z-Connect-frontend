import { Component } from '@angular/core';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-components',
  template: '<router-outlet></router-outlet>',
  providers: [FormationService] })
export class formationComponent {
}

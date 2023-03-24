import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-tache',
  templateUrl: './creation-tache.component.html',
  styleUrls: ['./creation-tache.component.css'],
})
export class CreationTacheComponent {
  @Input() textCreation!: string;
  constructor(private router: Router) {}
  ajouterTache() {
    this.router.navigate(['ajouter-une-tache']);
  }
}

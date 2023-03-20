import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homme-page',
  templateUrl: './homme-page.component.html',
  styleUrls: ['./homme-page.component.css'],
})
export class HommePageComponent {
  constructor(private router: Router) {}
  ajouterTache() {
    this.router.navigate(['ajouter-une-tache']);
  }
}

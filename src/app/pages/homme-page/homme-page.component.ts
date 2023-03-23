import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITodo } from 'src/app/mocks/taches.mock';

@Component({
  selector: 'app-homme-page',
  templateUrl: './homme-page.component.html',
  styleUrls: ['./homme-page.component.css'],
})
export class HommePageComponent {
  listTaches: ITodo[] = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.getTaches();
    console.log('list taches', this.listTaches);
  }
  ajouterTache() {
    this.router.navigate(['ajouter-une-tache']);
  }
  getTaches() {
    // console.log('valeur number localstorage', localStorage.getItem('number'));
    let taches = localStorage.getItem('taches');
    if (taches) {
      this.listTaches = JSON.parse(taches);
    }
  }
}

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
  listTachesUrgent: ITodo[] = [];
  listTachesNoUrgent: ITodo[] = [];
  textCreatTache: string = 'Aucune tâche pour le moment 🙌';
  constructor(private router: Router) {}
  ngOnInit() {
    this.getTaches();
  }
  ajouterTache() {
    this.router.navigate(['ajouter-une-tache']);
  }
  // getTaches() {
  //   // console.log('valeur number localstorage', localStorage.getItem('number'));
  //   let taches = localStorage.getItem('taches');
  //   if (taches) {
  //     this.listTaches = JSON.parse(taches);
  //   }
  // }

  getTaches() {
    // console.log('valeur number localstorage', localStorage.getItem('number'));
    let taches = localStorage.getItem('taches');
    if (taches) {
      const listTaches = JSON.parse(taches);

      listTaches.forEach((element: ITodo) => {
        if (element.isUrgent == true && element.doneDate == null) {
          this.listTachesUrgent.push(element);
        } else if (element.doneDate == null) {
          this.listTachesNoUrgent.push(element);
        }
      });
      console.log('this.listTachesNoUrgent', this.listTachesNoUrgent);
    }
  }
}

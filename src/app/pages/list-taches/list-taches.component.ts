import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodo } from 'src/app/mocks/taches.mock';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css'],
})
export class ListTachesComponent {
  listTachesUrgent: ITodo[] = [];
  listTachesNoUrgent: ITodo[] = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.getTaches();
  }
  getTaches() {
    // console.log('valeur number localstorage', localStorage.getItem('number'));
    let taches = localStorage.getItem('taches');
    if (taches) {
      const listTaches = JSON.parse(taches);

      listTaches.forEach((element: ITodo) => {
        if (element.isUrgent == true) {
          this.listTachesUrgent.push(element);
        } else {
          this.listTachesNoUrgent.push(element);
        }
      });
    }
  }

  // updateTache(id: number) {
  //   console.log('id', id);
  //   let taches = localStorage.getItem('taches');

  //   if (taches) {
  //     const tacheFound = JSON.parse(taches).find(
  //       (tache: ITodo) => tache.id === id
  //     );
  //     console.log('tacheFound', tacheFound);
  //     this.router.navigate(['ajouter-une-tache']);
  //   }
  // }
}

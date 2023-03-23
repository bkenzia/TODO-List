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
  constructor(private router: Router, private activatedRout: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRout.params.subscribe((routeParams) => {
      this.getTaches();
      // console.log('test found tache ', this.tacheFound);
    });

    console.log('date aujourduit', new Date().toLocaleDateString());
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
  private createTaches() {
    const newTaches: [] = [];
    const stringifyTaches = JSON.stringify(newTaches);
    localStorage.setItem('taches', stringifyTaches);
  }
  private savetaches(listTaches: ITodo[]) {
    localStorage.setItem('taches', JSON.stringify(listTaches));
  }
  public getListTaches(): ITodo[] {
    const listTaches = localStorage.getItem('taches');

    if (listTaches) {
      return JSON.parse(listTaches);
    } else {
      this.createTaches();
      return this.getListTaches();
    }
  }

  validateTache(id: number) {
    let taches = localStorage.getItem('taches');
    if (taches) {
      const tacheFound = JSON.parse(taches).find(
        (tache: ITodo) => tache.id === id
      );

      tacheFound.doneDate = new Date().toLocaleDateString();
      console.log('tache valider', tacheFound);
      console.log('taches', typeof taches);
      const listTaches = this.getListTaches();
      listTaches.forEach((element) => {
        if (tacheFound?.id == element.id) {
          element.doneDate = tacheFound.doneDate;
        }
      });
      this.savetaches(listTaches);
    }
  }
}

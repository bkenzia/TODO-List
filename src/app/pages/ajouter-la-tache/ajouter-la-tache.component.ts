import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryType, ITodo } from 'src/app/mocks/taches.mock';

@Component({
  selector: 'app-ajouter-la-tache',
  templateUrl: './ajouter-la-tache.component.html',
  styleUrls: ['./ajouter-la-tache.component.css'],
})
export class AjouterLaTacheComponent {
  tache: ITodo = {
    id: 0,
    content: '',
    category: 'init',
    isUrgent: false,
    doneDate: null,
  };
  tacheFound?: ITodo;
  listTaches: ITodo[] = [];
  mytextarea!: string;
  constructor(private router: Router, private activatedRout: ActivatedRoute) {}
  ngOnInit() {
    this.listTaches;
    this.updateTache();
  }
  getCategorie(categorie: CategoryType) {
    this.tache.category = categorie;
  }
  getContent(description: string) {
    this.tache.content = description;
  }
  getUrgentTache() {
    this.tache.isUrgent = true;
  }

  private createTaches() {
    const newTaches: [] = [];
    const stringifyTaches = JSON.stringify(newTaches);
    localStorage.setItem('taches', stringifyTaches);
  }
  private savetaches(listTaches: ITodo[]) {
    localStorage.setItem('taches', JSON.stringify(listTaches));
  }

  public addTache(tache: ITodo) {
    const taches = this.getTaches();
    this.tache.id = taches.length + 1;
    taches.push(tache);
    this.savetaches(taches);
    this.router.navigate(['list-taches']);
  }

  public getTaches(): ITodo[] {
    const listTaches = localStorage.getItem('taches');

    if (listTaches) {
      return JSON.parse(listTaches);
    } else {
      this.createTaches();
      return this.getTaches();
    }
  }

  updateTache() {
    this.mytextarea = '';
    const id = Number(this.activatedRout.snapshot.paramMap.get('id'));
    console.log('id-tache', id);

    let taches = localStorage.getItem('taches');

    if (taches) {
      this.tacheFound = JSON.parse(taches).find(
        (tache: ITodo) => tache.id === id
      );
      console.log('tacheFound', this.tacheFound);
    }
    if (id && this.tacheFound) {
      console.log('id if', id);

      this.mytextarea = this.tacheFound.content;

      console.log(this.mytextarea);
    }
  }
  addUpdateTache(tache: ITodo) {
    console.log(this.tacheFound);
    const taches = this.getTaches();
    console.log('list-tache', taches);
    taches.forEach((element) => {
      if (this.tacheFound?.id == element.id) {
        element.content = tache.content;
        element.category = tache.category;
        element.isUrgent = tache.isUrgent;
      }
    });
    this.savetaches(taches);
    this.router.navigate(['list-taches']);
  }
}

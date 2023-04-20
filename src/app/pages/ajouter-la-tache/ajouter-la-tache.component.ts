import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES, CategoryType, ITodo } from 'src/app/mocks/taches.mock';
import { LocaleStorageTachesService } from 'src/app/services/localeStorage-taches/locale-storage-taches.service';

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
  categories = CATEGORIES;

  constructor(
    private localeStorageTachesService: LocaleStorageTachesService,
    private router: Router,
    private activatedRout: ActivatedRoute
  ) {}
  ngOnInit() {
    this.listTaches;
    this.activatedRout.params.subscribe((routeParams) => {
      this.getTacheFound();
    });
    this.updateTache();
    console.log(this.mytextarea);
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

  public addTache(tache: ITodo) {
    const taches = this.localeStorageTachesService.getTaches();
    this.tache.id = taches.length + 1;
    taches.push(tache);
    this.localeStorageTachesService.savetaches(taches);
    this.router.navigate(['']);
  }

  getTacheFound(): ITodo | undefined {
    const id = Number(this.activatedRout.snapshot.paramMap.get('id'));
    let taches = localStorage.getItem('taches');
    if (taches) {
      this.tacheFound = JSON.parse(taches).find(
        (tache: ITodo) => tache.id === id
      );

      if (this.tacheFound) {
        return this.tacheFound;
      }
    }
    return this.tacheFound;
  }
  updateTache() {
    this.mytextarea = '';
    this.getTacheFound();
    const id = Number(this.activatedRout.snapshot.paramMap.get('id'));

    if (id && this.tacheFound) {
      this.mytextarea = this.tacheFound.content;
    }
  }
  addUpdateTache(tache: ITodo) {
    const taches = this.localeStorageTachesService.getTaches();

    taches.forEach((element) => {
      if (this.tacheFound?.id == element.id) {
        element.content = tache.content;
        element.category = this.tacheFound.category;
        element.isUrgent = this.tacheFound.isUrgent;
      }
    });
    this.localeStorageTachesService.savetaches(taches);
    this.router.navigate(['']);
  }
}

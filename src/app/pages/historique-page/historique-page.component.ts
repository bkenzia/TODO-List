import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITodo } from 'src/app/mocks/taches.mock';
import { LocaleStorageTachesService } from 'src/app/services/localeStorage-taches/locale-storage-taches.service';

@Component({
  selector: 'app-historique-page',
  templateUrl: './historique-page.component.html',
  styleUrls: ['./historique-page.component.css'],
})
export class HistoriquePageComponent {
  listTacheHistorique: ITodo[] = [];
  constructor(
    private router: Router,
    private localeStorageTachesService: LocaleStorageTachesService
  ) {}
  ngOnInit() {
    this.getValidateTaches();
  }
  getValidateTaches() {
    this.listTacheHistorique = [];
    // console.log('valeur number localstorage', localStorage.getItem('number'));
    let taches = localStorage.getItem('taches');
    if (taches) {
      const listTaches = JSON.parse(taches);

      listTaches.forEach((element: ITodo) => {
        if (element.doneDate != null) {
          this.listTacheHistorique.unshift(element);
        }
      });
      if (this.listTacheHistorique.length == 0) {
        this.router.navigate(['creation-tache']);
      }
    }
  }

  jinvalideTache(tache: ITodo) {
    const taches = this.localeStorageTachesService.getTaches();
    taches.forEach((element) => {
      if (tache.id == element.id) {
        element.doneDate = null;
      }
    });
    this.localeStorageTachesService.savetaches(taches);
    window.location.reload();
  }
}

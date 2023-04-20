import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/mocks/taches.mock';

@Injectable({
  providedIn: 'root',
})
export class LocaleStorageTachesService {
  constructor() {}
  public createTaches() {
    const newTaches: [] = [];
    const stringifyTaches = JSON.stringify(newTaches);
    localStorage.setItem('taches', stringifyTaches);
  }
  public savetaches(listTaches: ITodo[]) {
    localStorage.setItem('taches', JSON.stringify(listTaches));
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
}

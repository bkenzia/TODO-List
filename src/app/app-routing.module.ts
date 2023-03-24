import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationTacheComponent } from './components/creation-tache/creation-tache.component';
import { AjouterLaTacheComponent } from './pages/ajouter-la-tache/ajouter-la-tache.component';
import { HistoriquePageComponent } from './pages/historique-page/historique-page.component';
import { HommePageComponent } from './pages/homme-page/homme-page.component';
import { ListTachesComponent } from './pages/list-taches/list-taches.component';

const routes: Routes = [
  { path: '', component: HommePageComponent },
  { path: 'ajouter-une-tache', component: AjouterLaTacheComponent },
  {
    path: 'list-taches',
    component: ListTachesComponent,
  },
  {
    path: 'tache/:id',
    component: AjouterLaTacheComponent,
  },
  {
    path: 'historique',
    component: HistoriquePageComponent,
  },
  {
    path: 'creation-tache',
    component: CreationTacheComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

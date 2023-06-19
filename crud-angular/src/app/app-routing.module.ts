import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSuperHeroesComponent } from './super-heroes/all-super-heroes/all-super-heroes.component';
import { AddSuperHeroesComponent } from './super-heroes/add-super-heroes/add-super-heroes.component';
import { EditSuperHeroesComponent } from './super-heroes/edit-super-heroes/edit-super-heroes.component';

const routes: Routes = [
  { path: '', component: AllSuperHeroesComponent },
  { path: 'add', component: AddSuperHeroesComponent },
  { path: 'edit/:id', component: EditSuperHeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

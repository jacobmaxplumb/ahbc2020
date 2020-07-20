import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';

const routes: Routes = [
  {path: 'dog', component: DogComponent},
  {path: 'cat', component: CatComponent},
  {path: '', redirectTo: '/dog', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

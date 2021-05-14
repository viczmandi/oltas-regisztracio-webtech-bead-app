import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VakcinaRegisztracioListComponent } from './vakcina-regisztracio-list/vakcina-regisztracio-list.component';
import { VakcinaRegisztracioComponent } from './vakcina-regisztracio/vakcina-regisztracio.component';

const routes: Routes = [
  {
    path: '',
    component: VakcinaRegisztracioComponent
  },
  {
    path: 'vakcina-regisztracio-list',
    component: VakcinaRegisztracioListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

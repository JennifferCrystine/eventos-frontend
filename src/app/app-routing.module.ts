import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VolumesComponent } from './components/volume-cpnt/volumes/volumes.component';
import { CriarVolumeComponent } from './components/volume-cpnt/criar-volume/criar-volume.component';
import { VolumeDetalheComponent } from './components/volume-cpnt/volume-detalhe/volume-detalhe.component';
import { ArtigoDetalheComponent } from './components/artigo-cpnt/artigo-detalhe/artigo-detalhe.component';
import { EditarVolumeComponent } from './components/volume-cpnt/editar-volume/editar-volume.component';
import { EditarArtigoComponent } from './components/artigo-cpnt/editar-artigo/editar-artigo.component';
import { AutorComponent } from './components/autor-cpnt/autor/autor.component';
import { CriarArtigoComponent } from './components/artigo-cpnt/criar-artigo/criar-artigo.component';

export const routes: Routes = [
  {
    path: '', component: VolumesComponent
  },
  {
    path: 'volumes/novo', component: CriarVolumeComponent,
  },
  {
    path: 'volumes/:id', component: VolumeDetalheComponent,
  },
  {
    path: 'volumes/:id/artigos/:id', component: ArtigoDetalheComponent,
  },
  {
    path: 'volumes/:id/editar', component: EditarVolumeComponent,
  },
  {
    path: 'volumes/:id/artigos/:id/editar', component: EditarArtigoComponent,
  },
  {
    path: 'volumes/:id/artigos/:id/autor/:id', component: AutorComponent,
  },
  {
    path: 'volumes/:id/artigo', component: CriarArtigoComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

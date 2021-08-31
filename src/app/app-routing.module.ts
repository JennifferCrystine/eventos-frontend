import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VolumesComponent } from './components/volume-cpnt/volumes/volumes.component';
import { CriarVolumeComponent } from './components/volume-cpnt/criar-volume/criar-volume.component';
import { VolumeDetalheComponent } from './components/volume-cpnt/volume-detalhe/volume-detalhe.component';

export const routes: Routes = [
  {
    path: '', component: VolumesComponent
  },
  {
    path: 'volumes/novo', component: CriarVolumeComponent,
  },
  {
    path: 'volumes/:id', component: VolumeDetalheComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

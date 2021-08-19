import { Injectable } from '@angular/core';
import { VolumeApiModel } from './volume-api-model';
import { VolumeApiService } from './volume-api.service';
import { VolumeModel } from './volume-model';
import { VolumePostModel } from './volume-post-model';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {
  public volumes : VolumeModel[] = [];
  public volume : VolumeApiModel | undefined;

  constructor(public svc : VolumeApiService) { }

  public listarVolumes(){
    this.svc.listarVolumes().subscribe({
      next: (volumes) => {
        volumes.forEach(v => this.volumes.push(new VolumeModel(v)));
      }
    })
  }

  public obterVolume(id : number){
    this.svc.getById(id).subscribe({
      next: (volume) => {
        this.volume = volume;
      }
    })
  }

  public criarVolume(volume: VolumePostModel): void {

    this.svc.criarVolume(volume).subscribe({
      next: () => {
        this.atualizarEventos();
      },
    });
  }

  public atualizarEventos(): void {
    this.listarVolumes();
  }




}
